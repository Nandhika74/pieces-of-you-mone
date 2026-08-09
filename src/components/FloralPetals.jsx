import React, { useMemo } from 'react';

export default function FloralPetals() {
  // Generate 18 soft floating petals with randomized positions, delays, and speeds
  const petals = useMemo(() => {
    const items = [];
    const colors = ['#F9D2D8', '#C98998', '#E8C5C8', '#D8A0A6', '#FBE3E7', '#C9D6BF'];
    const shapes = ['petal-oval', 'petal-cherry', 'petal-rose'];

    for (let i = 0; i < 20; i++) {
      items.push({
        id: i,
        left: `${(i * 5.2 + Math.random() * 8) % 98}%`,
        delay: `${(i * 0.7).toFixed(1)}s`,
        duration: `${(10 + (i % 6) * 2.5).toFixed(1)}s`,
        size: Math.floor(12 + (i % 5) * 4),
        color: colors[i % colors.length],
        shape: shapes[i % shapes.length],
        opacity: 0.45 + (i % 4) * 0.1,
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal-float"
          style={{
            left: p.left,
            top: '-20px',
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        >
          {/* Subtle Rotating Flower Petal SVG */}
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            className="animate-gentle-sway"
            style={{ filter: 'drop-shadow(0px 2px 4px rgba(216, 160, 166, 0.25))' }}
          >
            <path
              d="M15 0 C25 10 30 25 15 38 C0 25 5 10 15 0 Z"
              fill={p.color}
            />
            {/* Center vein detail */}
            <path
              d="M15 10 Q15 22 15 32"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
