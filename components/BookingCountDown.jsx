import { useEffect, useState, useContext } from "react";
import styles from "./BookingCountDown.module.css";
import { dataContext } from "../src/app/contexts/basketContext";
export default function BookingCountDown() {
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);
  const [timeLeft, setTimeLeft] = useState(300);
  useEffect(() => {
    if (productsInCart.length !== 0) {
      if (timeLeft <= 0) {
        return;
      }
      const counter = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(counter);
    }
  });
  if (productsInCart.length !== 0) {
    return (
      <div className={styles.countdownWrapper} style={{}}>
        <span className={styles.time}>{timeLeft}</span>
      </div>
    );
  } else {
    return;
  }
}
