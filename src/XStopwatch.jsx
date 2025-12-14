import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start / Stop toggle
  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
  };

  // Reset
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSecondsElapsed(0);
  };


  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <div style={styles.container}>
      <h1>Stopwatch</h1>
      <p>Time: {formattedTime}</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    gap: "20px",
    backgroundColor: "#f2f2f2",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
};

export default Stopwatch;
