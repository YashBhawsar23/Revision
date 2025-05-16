import { useState, useEffect } from "react";

export default function PixelationTransition() {
  const [clickCount, setClickCount] = useState(0);
  const totalClicks = 15;
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle button click
  const handleClick = () => {
    if (clickCount < totalClicks) {
      setClickCount(clickCount + 1);
    }
  };

  // Calculate the pixelation level based on click count
  const getPixelSize = () => {
    if (clickCount === 0) return 1000; // Essentially invisible (black)
    if (clickCount === totalClicks) return 1; // Clear image

    // Exponential decrease in pixel size as clicks increase
    return Math.round(40 * Math.pow(0.8, clickCount));
  };

  const pixelSize = getPixelSize();

  // Calculate progress percentage
  const progress = Math.round((clickCount / totalClicks) * 100);

  // Preload the image from public folder
  useEffect(() => {
    const img = new Image();
    img.src = "/Untitled.jpg"; // Path to your image in public folder
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black">
      {/* Button at the top */}
      <div className="w-full py-6 flex justify-center">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          {clickCount < totalClicks
            ? "Click to Reveal Image"
            : "Image Fully Revealed!"}
        </button>
      </div>

      {/* Progress indicator */}
      <div className="mb-4 text-white">
        Progress: {progress}% ({clickCount}/{totalClicks} clicks)
      </div>

      {/* Canvas with pixelated image */}
      <div className="relative flex items-center justify-center">
        {imageLoaded && (
          <div
            className="w-full max-w-2xl aspect-video bg-cover bg-center"
            style={{
              backgroundImage: `url('/image.jpg')`,
              filter: `blur(${pixelSize / 3}px)`,
              imageRendering: pixelSize > 1 ? "pixelated" : "auto",
              transition: "filter 0.5s ease-in-out",
            }}
          />
        )}
      </div>

      {/* Pixel size indicator */}
      <div className="mt-4 text-white">Pixel size: {pixelSize}px</div>
    </div>
  );
}
