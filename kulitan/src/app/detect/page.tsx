"use client";

import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import NextImage from 'next/image';

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
        };
      } catch (error) {
        console.error("Error handling image upload:", error);
      }
    }
  };
  const handleDeleteImage = () => {
    setSelectedImage(null);
    if (imageResultRef.current) {
      imageResultRef.current.innerHTML = "";
    }
    // You can also add code here to clear any related state or perform other actions.
  };
  
  //Display Image result
  const displayImageAndResults = (image: HTMLImageElement, predictions: Array<{ className: string, probability: number }>) => {
    if (canvasRef.current && imageResultRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Resize the canvas based on the image's dimensions
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the uploaded image on the canvas
        ctx.drawImage(image, 0, 0, image.width, image.height);

        if (predictions.length > 0) {
          // Display the class with the highest probability
          const maxPrediction = predictions.reduce((max, prediction) =>
            prediction.probability > max.probability ? prediction : max
          );

          ctx.font = "25px Arial";
          ctx.fillStyle = "white";
          ctx.fillText(
            `${maxPrediction.className} (${Math.round(maxPrediction.probability * 100)}%)`,
            25,
            50
          );

          // Display image result below the canvas
          const imageResult = imageResultRef.current;
          imageResult.innerHTML = `
            <p>Detected: ${maxPrediction.className}</p>
            <p>Probability: ${Math.round(maxPrediction.probability * 100)}%</p>
          `;
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
    
    <div className="object-detection-wrapper">
      <br></br>
      <h1 className="Label1">Real-Time Detection</h1>
      <br></br>
      <div className="file-container">
          <input className="file-upload" type="file" accept="image/*" onChange={handleImageUpload} />
          <br></br>
          <button className="deletebtn" onClick={handleDeleteImage}>Close</button>

        <div className="imgcenter">
            {/* Display the selected image using <Image /> */}
              {selectedImage && (
               <div className="image-preview">
                 <NextImage
                    src={selectedImage}
                    alt="Selected"
                    width={150} // Adjust the width and height as needed
                    height={150}
                 />
               </div>
              )}
        </div> 
      </div>

      <div ref={imageResultRef} className="image-result"></div>
      {modelLoaded ? (
        <div className="video-canvas-wrapper">
          <video ref={videoRef} autoPlay playsInline muted className="detection-video" />
          <canvas ref={canvasRef} className="detection-canvas" />
        </div>
        
      ) : (
        <div className="loading-bar">
          <p>Loading Model...</p>
          <div className="loading-spinner"></div>
        </div>
        
      )}

    </div>
    
  );
  
}
