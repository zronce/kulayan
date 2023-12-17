"use client";

import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import NextImage from 'next/image';
import Link from "next/link";
import { BackArrow } from "@/shared/icons/BackArrow";

export default function ObjectDetection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);
  const imageResultRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  


  useEffect(() => {
    // Load the Teachable Machine model
    const loadModel = async () => {
      try {
        await tf.ready();
        const modelURL = "https://storage.googleapis.com/tm-model/nsOtcjFZw/model.json";
        const metadataURL = "https://storage.googleapis.com/tm-model/nsOtcjFZw/metadata.json";
        const model = await tmImage.load(modelURL, metadataURL);
        detectObjects(model);
        setModelLoaded(true);
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    loadModel();
  }, );
  
  //For uploading image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        const modelURL = "https://storage.googleapis.com/tm-model/nsOtcjFZw/model.json";
        const metadataURL = "https://storage.googleapis.com/tm-model/nsOtcjFZw/metadata.json";
        const model = await tmImage.load(modelURL, metadataURL);

        // Create an image element to display the uploaded image
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = async () => {
          // Display the selected image
          setSelectedImage(URL.createObjectURL(file));

          // Perform detection on the uploaded image
          const predictions = await model.predict(image);

          // Display the results
          displayImageAndResults(image, predictions);

          // Check if a delete button already exists
          if (!document.querySelector('button')) {
            // Create a delete button and append it to the DOM
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Clear';
            deleteButton.addEventListener('click', () => clearImageAndResults());
            document.getElementById('delete-button-container')?.appendChild(deleteButton);
          }
          
        };
      } catch (error) {
        console.error("Error handling image upload:", error);
      }
    }
  };
 
  const clearImageAndResults = () => {
    // Clear the canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  
    // Clear the image
    setSelectedImage(null);
  
    // Clear the result elements
    const probabilityTextElement = document.getElementById('probability-text');
    const probabilityRateElement = document.getElementById('probability-rate');
    if (probabilityTextElement && probabilityRateElement) {
      probabilityTextElement.textContent = '';
      probabilityRateElement.textContent = '';
    }
  
    // Remove the delete button
    const deleteButton = document.querySelector('button');
    if (deleteButton) {
      deleteButton.remove();
    }
  };

  //Display Image result
  const displayImageAndResults = (image: HTMLImageElement, predictions: Array<{ className: string, probability: number }>) => {
    const probabilityTextElement = document.getElementById("probability-text");
    const probabilityRateElement = document.getElementById("probability-rate");
    
    if (canvasRef.current && probabilityTextElement && probabilityRateElement) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      if (ctx) {
        // Resize the canvas based on the image's dimensions
        canvas.width = image.width;
        canvas.height = image.height;
  
        if (predictions.length > 0) {
          const maxPrediction = predictions.reduce((max, prediction) =>
            prediction.probability > max.probability ? prediction : max
          );
  
          if (maxPrediction.probability >= 0.7) {
            // Display the class with the highest probability
            ctx.drawImage(image, 0, 0, image.width, image.height);
            ctx.font = "25px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(
              `${maxPrediction.className} (${Math.round(maxPrediction.probability * 100)}%)`,
              25,
              50
            );
  
            // Update the probability text element
            probabilityTextElement.textContent = `Class Name: ${maxPrediction.className} `;
            probabilityRateElement.textContent = `Probability: ${Math.round(maxPrediction.probability * 100)}%`;
          } else {
            // If probability is below 70%, display "No Kulitan Detected"
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "25px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("No Kulitan Detected", 25, 50);
  
            // Update the probability text element accordingly
            probabilityTextElement.textContent = "No Kulitan Detected";
            probabilityRateElement.textContent = "Probability: Below 70%";
          }
        } else {
          // Handle the case when there are no predictions
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          probabilityTextElement.textContent = "Class Name: No Predictions";
          probabilityRateElement.textContent = "Probability: N/A";
        }
      }
    }
  };
  

const detectObjects = async (model: tmImage.CustomMobileNet) => {
  if (videoRef.current && canvasRef.current) {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      try {
        // Access the device's main camera (rear camera)
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;

        video.onloadedmetadata = () => {
          video.play();
          resizeCanvas(video, canvas);

          const detectFrame = async () => {
            if (videoRef.current) {
              const predictions = await model.predict(videoRef.current);
              ctx.clearRect(0, 0, canvas.width, canvas.height);

              // Find the class with the highest probability
              const maxPrediction = predictions.reduce((max, prediction) =>
                prediction.probability > max.probability ? prediction : max
              );

              // Display the class with the highest probability
              ctx.font = "25px Arial";
              ctx.fillStyle = "red";
              ctx.fillText(
                `${maxPrediction.className} (${Math.round(maxPrediction.probability * 100)}%)`,
                25,
                50
              );

              // Display "Not a Glyph" when the probability is below 70%
              if (maxPrediction.probability < 0.7) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = "25px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("Not a Kulitan Glyph", 25, 50);
              }

              requestAnimationFrame(detectFrame);
            }
          };

          detectFrame();
        };
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }
  }
};


  // Function to resize the canvas based on the video's dimensions
  const resizeCanvas = (video: HTMLVideoElement, canvas: HTMLCanvasElement) => {
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const scale = Math.min(screenWidth / videoWidth, screenHeight / videoHeight);

    canvas.width = videoWidth * scale;
    canvas.height = videoHeight * scale;
  };
  

  return (
    <div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>

    <div className="object-detection-wrapper">

      <br />
      <br></br>
      <br></br>
      <h1 className="Label1">Real-Time Detection</h1>
      <br />
      <div className="file-container">
        <input className="file-upload" type="file" accept="image/*" onChange={handleImageUpload} />
        <div id="delete-button-container"></div>
      </div>
  
      {selectedImage && (
        <div className="img-cont" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <NextImage 
            className="imgprev"
            src={selectedImage}
            alt="Selected Preview"
            layout="responsive"
            width={200}
            height={200}
            style={{
              border: '5px solid #000',
              borderRadius: '10px',
              maxWidth: '30%',
              maxHeight: '30%',
              marginTop: '20px',
            }}
          />
        </div>
      )}
  
      <div className="probability-text" id="probability-text"></div>
      <div className="probability-rate" id="probability-rate"></div>
  
      {modelLoaded ? (
        // Content to render when modelLoaded is true
        <div className="video-canvas-wrapper">
          <video ref={videoRef} autoPlay playsInline muted className="detection-video" />
          <canvas ref={canvasRef} className="detection-canvas" />
        </div>
      ) : (
        // Default loading content
        <div className="loading-bar">
          <p>Loading Model...</p>
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
} 
