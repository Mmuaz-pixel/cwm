const StarryBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {Array.from({ length: 200 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-white opacity-20"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
