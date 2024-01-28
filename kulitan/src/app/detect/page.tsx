"use client";

import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import NextImage from 'next/image';
import Link from "next/link";
import { BackArrow } from "@/shared/icons/BackArrow";
import useSound from 'use-sound';

export default function ObjectDetection() {
  const soundFile135 = '/audio/click2.mp3';
	const [play135] = useSound(soundFile135);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [predictionResult, setPredictionResult] = useState<Array<{
    className: string;
    probability: number;
  }> | null>(null);
  const [cameraOn, setCameraOn] = useState<boolean>(true);
  
  
  useEffect(() => {
    // Load the Teachable Machine model
    const loadModel = async () => {
      try {
        await tf.ready();
        const modelURL = "https://storage.googleapis.com/tm-model/SuzxissLH/model.json";
        const metadataURL = "https://storage.googleapis.com/tm-model/SuzxissLH/metadata.json";
        const model = await tmImage.load(modelURL, metadataURL);
        detectObjects(model);
        setModelLoaded(true);
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    loadModel();
  }, );
  

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

        if (cameraOn) {
          video.srcObject = stream;
        } else {
          stream.getTracks().forEach((track) => track.stop());
        }

        video.onloadedmetadata = () => {
          video.play();
          resizeCanvas(video, canvas);

          const detectFrame = async () => {
            if (videoRef.current && cameraOn) {
              const predictions = await model.predict(videoRef.current);
              ctx.clearRect(0, 0, canvas.width, canvas.height);
        
              // Find the class with the highest probability
              const maxPrediction = predictions.reduce((max, prediction) =>
                prediction.probability > max.probability ? prediction : max
              );
        
              // Display the class with the highest probability
ctx.font = "20px ls2";

// Set the background color for the highlighted area
ctx.fillStyle = "white";

// Determine the width and height of the text
const textWidth = ctx.measureText(`${maxPrediction.className} (${Math.round(maxPrediction.probability * 100)}%)`).width;
const textHeight = 20; // Adjust as needed

// Create a rectangle behind the text
ctx.fillRect(25, 50 - textHeight, textWidth, textHeight + 5);

// Set the text color
ctx.fillStyle = "red";

// Display the text
ctx.fillText(
  `${maxPrediction.className} (${Math.round(maxPrediction.probability * 100)}%)`,
  25,
  50
);
        
              // Display "Not a Glyph" when the probability is below 40%
              if (maxPrediction.probability < 0.4) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "white";
                ctx.font = "25px ls2";
                ctx.fillStyle = "red";
                ctx.fillText("Not a Kulitan Glyph", 25, 50);
              }
        
              // Display accuracy label based on the probability range
              const accuracy = maxPrediction.probability * 100;
              if (accuracy >= 80) {
                ctx.fillStyle = "green";
                ctx.fillText("", 25, 80);
              } else if (accuracy >= 60) {
                ctx.fillStyle = "yellow";
                ctx.fillText("Try Again", 25, 80);
              } else {
                ctx.fillStyle = "red";
                ctx.fillText("Can't Recognize", 25, 80);
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
const toggleCamera = () => {
  setCameraOn((prevCameraOn) => !prevCameraOn);
};


const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];

  if (file) {
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
      try {
        await tf.ready();
        const modelURL = "https://storage.googleapis.com/tm-model/SuzxissLH/model.json";
        const metadataURL = "https://storage.googleapis.com/tm-model/SuzxissLH/metadata.json";
        const model = await tmImage.load(modelURL, metadataURL);

        const imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(file);

        imageElement.onload = async () => {
          const predictions = await model.predict(imageElement);
        
          const top3Predictions = predictions
            .map((prediction) => ({
              className: prediction.className,
              probability: prediction.probability * 100,
            }))
            .sort((a, b) => b.probability - a.probability)
            .slice(0, 3);
        
          setPredictionResult(top3Predictions);
        
          console.log(predictions);
        };

        const objectURL = URL.createObjectURL(file);
        setPreviewUrl(objectURL);

        if (videoRef.current) {
          videoRef.current.src = objectURL;
        }
      } catch (error) {
        console.error("Error loading model or making predictions:", error);
      }
    } else {
      console.error('Unsupported file type. Please upload a PNG or JPEG image.');
    }
  }
};

const resizeCanvas = (video: HTMLVideoElement, canvas: HTMLCanvasElement) => {
  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;
  const targetAspectRatio = 1;
  const targetWidth = Math.min(window.innerWidth, videoWidth);
  const targetHeight = targetWidth / targetAspectRatio;

  canvas.width = targetWidth;
  canvas.height = targetHeight;
};

  return (
    <div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[50px]">
    <div className="navbar bg-[#212A3E] w-full absolute h-full z-0 opacity-100 flex items-center justify-center">
      GLYPHS RECOGNITION
    </div>
					<Link onClick={play135} href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>


<div className="object-detection-wrapper">
      <br />
      <br></br>
      <br></br>
      <input
        type="file"
        className="file-upload"
        accept="image/png, image/jpeg"  // Restrict accepted file types
        onChange={handleFileUpload}
      />

<br></br>
{previewUrl || predictionResult ? (
  <button className="delete-button" onClick={() => {
    setPreviewUrl(null);
    setPredictionResult(null);
  }}>Clear</button>
) : null}

{/* Display the preview image */}
    {previewUrl && (
    <div className="imagepreview">
    <NextImage className="imgprev" src={previewUrl} alt="Preview" width={100} height={100} />
  </div>
)}

      <br></br>
      {/* Display the top 3 prediction results */}
{predictionResult && (
  <div className="prediction-result">
    <p className="resultsdp">Confidence:</p>
    <div className="resultbg">
    {predictionResult.map((result, index) => (
      <p key={index} className="result-text">{`${result.className} (${result.probability.toFixed()}%)`}</p>
    ))}
    </div>
  </div>
)}
<br></br>
<div className="fullcont">
<br></br>
<p className="pagetitle3"></p>
    <label className="camera-toggle-switch">
      <input type="checkbox" placeholder="Switch Camera On or Off" checked={cameraOn} onChange={toggleCamera} />
      <span className="slider"></span>
      <span className="toggle-label">{cameraOn}</span>
    </label>
      {modelLoaded ? (
        // Content to render when modelLoaded is true
        <div className="video-canvas-wrapper">
          <video ref={videoRef} autoPlay playsInline muted className="detection-video" />
          <canvas ref={canvasRef} className="detection-canvas" />
        </div>
      ) : (
        // Default loading content
        <div className="loading-bar">
          <p className="loading">Loading Model...</p>
          <div className="loading-spinner"></div>
        </div>
      )}
       <br></br>
    </div>
    </div>
    
    </div>
    
  </div>
    
  );
} 

