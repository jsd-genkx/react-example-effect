import { useState, useEffect } from "react";

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      console.log("useEffect");
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => {
      clearInterval(intervalId);
      console.log("clean up useEffect");
    };
  }, [currentTime]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center text-4xl font-bold">{currentTime}</div>
    </div>
  );
}

export default LiveClock;
