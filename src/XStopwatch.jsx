import { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

 

    const seconds = time % 60;
    const minutes = Math.floor(time / 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedTime = `${minutes}:${formattedSeconds}`;

  const starthandler = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev+1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopHandler = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>Time:{formattedTime}</h1>
      <br />
      {!isRunning && <button onClick={starthandler}>Start</button>}
      {isRunning && <button onClick={stopHandler}>Stop</button>}
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
export default Stopwatch;

