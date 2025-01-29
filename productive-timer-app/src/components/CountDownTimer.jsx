import React from "react";
import styles from "../styles/CountDownTimer.module.css";

function CountDownTimer({
  time,
  isRunning,
  handleIncreaseTime,
  handleDecreaseTime,
  handleStartTimer,
  handleStopTimer,
  handleClearTimer,
  handleResetTimer
}) {

  return (
    <div>
      <div className={styles.container}>
        <button onClick={handleIncreaseTime} disabled={isRunning}>+</button>
        <p className={styles.timer}>{time}</p>
        <button onClick={handleDecreaseTime} disabled={isRunning}>-</button>
      </div>
      <div className={styles.container}>
        <button onClick={handleStartTimer} disabled={isRunning || time === 0}>Start</button>
        <button onClick={handleStopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={handleClearTimer}>Clear</button>
        <button onClick={handleResetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default CountDownTimer;
