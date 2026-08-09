import React from 'react';

// Single Blooming Cherry Blossom / Rose Icon Component
export function FlowerBloom({ className = "w-5 h-5 text-[#D8A0A6]", color = "#D8A0A6" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* 5 Petals */}
      <path d="M50 50 C40 20, 60 20, 50 50" fill={color} opacity="0.85" />
      <path d="M50 50 C20 40, 20 60, 50 50" fill={color} opacity="0.85" />
      <path d="M50 50 C30 80, 50 85, 50 50" fill={color} opacity="0.85" />
      <path d="M50 50 C70 80, 80 60, 50 50" fill={color} opacity="0.85" />
      <path d="M50 50 C80 40, 80 20, 50 50" fill={color} opacity="0.85" />
      {/* Center Pistil */}
      <circle cx="50" cy="50" r="8" fill="#FFF2E8" stroke="#7A8C6A" strokeWidth="1.5" />
    </svg>
  );
}

// Elegant Horizontal Floral Vine Divider
export function FloralVineDivider({ className = "w-48 h-6 my-6 text-[#D8A0A6]" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <svg viewBox="0 0 120 20" fill="none" className="w-24 h-4 text-[#D8A0A6]">
        <path d="M0 10 Q 30 0 60 10 Q 90 20 120 10" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="30" cy="5" r="2.5" fill="#7A8C6A" />
        <circle cx="90" cy="15" r="2.5" fill="#7A8C6A" />
      </svg>
      <FlowerBloom className="w-5 h-5 text-[#D8A0A6]" />
      <svg viewBox="0 0 120 20" fill="none" className="w-24 h-4 text-[#D8A0A6]">
        <path d="M0 10 Q 30 20 60 10 Q 90 0 120 10" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="30" cy="15" r="2.5" fill="#7A8C6A" />
        <circle cx="90" cy="5" r="2.5" fill="#7A8C6A" />
      </svg>
    </div>
  );
}

// Floral Corner Flourish for Polaroid and Letter cards
export function FloralCornerFlourish({ position = "top-left", className = "w-10 h-10 text-[#D8A0A6]" }) {
  const rotationClass =
    position === "top-right"
      ? "rotate-90 top-2 right-2"
      : position === "bottom-left"
      ? "-rotate-90 bottom-2 left-2"
      : position === "bottom-right"
      ? "rotate-180 bottom-2 right-2"
      : "top-2 left-2";

  return (
    <div className={`absolute pointer-events-none opacity-80 z-20 ${rotationClass} ${className}`}>
      <svg viewBox="0 0 50 50" fill="none" className="w-full h-full text-[#D8A0A6]">
        <path d="M5 45 C5 20 20 5 45 5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="12" cy="12" r="4" fill="#C98998" />
        <circle cx="28" cy="8" r="3" fill="#7A8C6A" />
        <circle cx="8" cy="28" r="3" fill="#7A8C6A" />
      </svg>
    </div>
  );
}
