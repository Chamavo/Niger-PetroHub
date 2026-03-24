"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export default function PlaceholderImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
}: PlaceholderImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-accent/20 border border-accent/30 text-accent font-medium text-xs text-center p-2 rounded-sm ${className}`}
        style={{ width: fill ? "100%" : width, height: fill ? "100%" : height }}
      >
        <span>{alt || src.split("/").pop()}</span>
      </div>
    );
  }

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
        <Image
          src={src.startsWith("/") ? src : `/${src}`}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          className={className}
          onError={() => setError(true)}
        />
    </div>
  );
}
