"use client";
import { useRef, useEffect } from "react";
import { assetPath } from "@/lib/basePath";

export default function InvitePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function setCanvasSize() {
      if (canvas && video) {
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 360;
      }
    }

    function processFrame() {
      const currentVideo = videoRef.current;
      const currentCanvas = canvasRef.current;
      const currentCtx = currentCanvas?.getContext("2d");
      if (!currentVideo || !currentCanvas || !currentCtx) return;
      
      currentCtx.drawImage(currentVideo, 0, 0, currentCanvas.width, currentCanvas.height);
      const imageData = currentCtx.getImageData(0, 0, currentCanvas.width, currentCanvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // simple green-screen threshold
        if (g > r + 30 && g > b + 30) {
          data[i + 3] = 0; // make transparent
        }
      }

      currentCtx.putImageData(imageData, 0, 0);

      if (!currentVideo.paused && !currentVideo.ended) {
        requestAnimationFrame(processFrame);
      }
    }

    const onLoaded = () => setCanvasSize();
    const onPlay = () => requestAnimationFrame(processFrame);
    const onCanPlay = () => { if (video.paused) video.play(); };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("play", onPlay);
    video.addEventListener("canplay", onCanPlay);

    // try to autoplay
    if (video.paused) video.play().catch(() => {});

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", margin: 0, padding: 0, background: "#B79879" }}>
      <div style={{ maxWidth: "100%" }}>
        <video
          ref={videoRef}
          id="video"
          src={assetPath("/ok.mp4")}
          muted
          autoPlay
          playsInline
          style={{ display: "none" }}
        />
        <canvas
          ref={canvasRef}
          id="canvas"
          style={{ maxWidth: "100%", maxHeight: "100vh", display: "block" }}
        />
      </div>
    </div>
  );
}