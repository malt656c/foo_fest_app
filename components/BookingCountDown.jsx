import { useEffect, useState } from "react";
import styles from "./BookingCountDown.module.css";
export default function BookingCountDown(props) {
  const [isRunning, setIsRunning] = useState(props.isPlaying);
  const [timeLeft, setTimeLeft] = useState(300);
  useEffect(() => {
    if (isRunning == true) {
      if (timeLeft <= 0) {
        return;
      }
      const counter = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(counter);
    }
  });

  return (
    <div className={styles.countdownWrapper}>
      <span className={styles.time}>{timeLeft}</span>
      <button
        onClick={() => {
          isRunning ? setIsRunning(false) : setIsRunning(true);
        }}
      >
        klik
      </button>
    </div>
  );
}
