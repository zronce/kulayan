"use client";

import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";

export default function ObjectDetection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);
  const [probability, setProbability] = useState<number | null>(null);
  const [className, setClassName] = useState<string | null>(null); // Added state for class name

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
  }, []);

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
                ctx.font = "20px Arial";
                ctx.fillStyle = "red";
                ctx.fillText(
                  `${maxPrediction.className} (${Math.round(maxPrediction.probability * 100)}%)`,
                  10,
                  25
                );

                // Set the probability and class name states
                setProbability(maxPrediction.probability);
                setClassName(maxPrediction.className);

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
      <h1>Real-Time Object Detection</h1>
      {modelLoaded ? (
        <div className="video-canvas-container">
          <video ref={videoRef} autoPlay playsInline muted className="detection-video" />
          <canvas ref={canvasRef} className="detection-canvas" />
          {probability !== null && (
            <div>
              <p className="probability">Detected: ({Math.round(probability * 100)}%) {className}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="loading-bar">
          <p className="loading-message">Loading model...</p>
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}
