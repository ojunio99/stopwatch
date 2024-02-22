import React, { useState, useEffect } from 'react';
import './App.css'; 

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="app-container">
      <div className="stopwatch-container">
      <h1 className="stopwatch-title">Stopwatch</h1>
        <p className="time-display">{formatTime(time)}</p>
        {!isRunning ? (
          <button className="btn start-btn" onClick={startStopwatch}>Start</button>
        ) : (
          <button className="btn stop-btn" onClick={stopStopwatch}>Stop</button>
        )}
        <button className="btn reset-btn" onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;