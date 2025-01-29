import React, { useState, useEffect } from "react";
import "./App.css";
import CountDownTimer from "./components/CountDownTimer";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(0);

  const handleIncreaseTime = () => {
    setTime((prevTime) => {
      const newTime = prevTime + 1
      setInitialTime(newTime)
      return newTime
    });
  };

  const handleDecreaseTime = () => {
    if (time > 0) {
      setTime((prevTime) => {
        const newTime = prevTime - 1
        setInitialTime(newTime)
        return newTime
      });
    } else {
      console.log("Cant have negative time");
    }
  };

  const handleStartTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handleStopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleClearTimer = () => {
    setTime(0)
    setInitialTime(0)
    setIsRunning(false)
  };

  const handleResetTimer = () => {
    setIsRunning(false)
    setTime(initialTime)
  }

  useEffect(() => {

    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [isRunning, time]);

  return (
    <div>
      <CountDownTimer
        time={time}
        isRunning={isRunning}
        handleIncreaseTime={handleIncreaseTime}
        handleDecreaseTime={handleDecreaseTime}
        handleStartTimer={handleStartTimer}
        handleStopTimer={handleStopTimer}
        handleClearTimer={handleClearTimer}
        handleResetTimer={handleResetTimer}
      />
    </div>
  );
}

export default App;
