import React, { useRef, useState } from "react";

interface ImageMagnifierProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  zoomLevel?: number;
}

export default function ImageMagnifier({
  src,
  alt,
  width,
  height,
  zoomLevel = 2.5,
}: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = imgRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
      }}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Ảnh gốc */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          objectFit: "cover",
          borderRadius: "8px",
          display: "block",
        }}
      />

      {/* Kính lúp trên ảnh */}
      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${(position.x * width) / 100 - 50}px`,
            top: `${(position.y * height) / 100 - 50}px`,
            width: "100px",
            height: "100px",
            border: "2px solid #f97316",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            pointerEvents: "none",
            borderRadius: "4px",
            zIndex: 10,
          }}
        />
      )}

      {/* Zoom lớn đè lên phần nội dung */}
      {showMagnifier && (
        <div
          style={{
            position: "fixed", // dùng fixed để đè lên bất kỳ phần nào
            top: "100px", // tuỳ chỉnh theo layout của bạn
            left: `calc(${width}px + 100px)`, // đặt cách ảnh gốc
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundRepeat: "no-repeat",
            border: "2px solid #ccc",
            borderRadius: "8px",
            zIndex: 9999,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            backgroundColor: "white",
          }}
        />
      )}
    </div>
  );
}
