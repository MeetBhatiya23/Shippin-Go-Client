import React, { useState } from "react";


const ProductZoom = ({ imageUrl }) => {
    const [backgroundPosition, setBackgroundPosition] = useState("center");
    const [showZoom, setShowZoom] = useState(false); // State to control zoom visibility

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        // Update the background position based on mouse movement
        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <div
            className="zoom-container w-fit"
            onMouseEnter={() => setShowZoom(true)} // Show zoom on hover
            onMouseLeave={() => setShowZoom(false)} // Hide zoom when not hovering
        >
            {/* Left side with normal image */}
            <div className="product-image-container ">
                <img
                    src={imageUrl}
                    alt="Product"
                    className="product-image"
                    onMouseMove={handleMouseMove}
                />
            </div>

            {/* Right side with zoomed-in image (hidden by default) */}
            {showZoom && (
                <div
                    className="zoomed-image"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundPosition,
                    }}
                ></div>
            )}
        </div>
    );
};

export default ProductZoom;
