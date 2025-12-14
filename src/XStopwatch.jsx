import { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(undefined);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  let formattedTime = "0:00";

  if (typeof time === "number") {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    formattedTime = `${minutes}:${formattedSeconds}`;
  }

  const starthandler = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => (prev === undefined ? 1 : prev + 1));
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopHandler = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetHandler = () => {
    setTime(undefined);
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
