import React, { useState, useEffect } from "react";

const StatusBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // increment by 1%
      });
    }, 70); // update every 50ms → smooth
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", background: "#eee", borderRadius: "8px", padding: "3px" }}>
      <div
        style={{
          height: "20px",
          width: `${progress}%`,
          background: progress < 100 ? "blue" : "green",
          borderRadius: "5px",
          textAlign: "center",
          color: "white",
          fontSize: "12px",
          transition: "width 0.05s linear" // smooth animation
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default StatusBar;
