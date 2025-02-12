import React, { useEffect, useState } from "react";

function VideoPlayer() {
  const images = [
    "https://www.myg.in/images/thumbnails/300/300/detailed/108/61sU8OqBs4L._SL1500___1_-removebg-preview__1_.png",
    "video/apple-headphone.png",
    "video/galaxyFold.png",
    "video/apple16.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade in effect
      }, 500); // Fade-out time (half a second)
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  if (currentIndex === 0) {
    setCurrentIndex(1);
  }

  return (
    <div className="">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="video/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="gradiant-overlay relative z-10 flex gap-10 items-center justify-center h-full text-center">
          <div className="container flex justify-between items-center">
            <div className="flex flex-col items-start gap-1 ">
              <h1 className="gradiant-text text-5xl font-bold text-blue-400 italic">
                Welcome to Shoppin Go
              </h1>
              <div className="text-white ml-2 text-sm">
                🛍️ Limited-Time Steal! 10% OFF – Elevate Your Style Today!
              </div>
              <a href="/allproducts" class="button animatad-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Shop Now
              </a>
            </div>
            <div className="h-[50%] w-[50%] flex justify-center items-center">
              <img
                src={images[currentIndex]}
                alt="Slider Image"
                className={`max-w-[100%] max-h-[100%] rounded-lg shadow-lg transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
