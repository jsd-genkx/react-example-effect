import { useState, useEffect } from "react";

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center text-4xl font-bold">{currentTime}</div>
    </div>
  );
}

export default LiveClock;
