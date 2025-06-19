const RecalculatingLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black opacity-30">
      <div className="relative w-20 h-20 mb-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 w-1.5 h-5 rounded bg-white opacity-0 animate-pulse-dot"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-140%)`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      <div className="text-sm text-white tracking-wide uppercase">
        Recalculating Panel Costs...
      </div>

      {/* Scoped styles (React-safe, not styled-jsx) */}
      <style>
        {`
          @keyframes pulse-dot {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }

          .animate-pulse-dot {
            animation: pulse-dot 1.2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default RecalculatingLoader;
