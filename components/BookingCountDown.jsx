import { useEffect, useState, useContext } from "react";
import styles from "./BookingCountDown.module.css";
import { dataContext } from "../src/app/contexts/basketContext";
import { useRouter } from "next/navigation";
export default function BookingCountDown() {
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);
const router=useRouter()
  const seconds = 300;
  const [timeLeft, setTimeLeft] = useState(seconds);
  useEffect(() => {
    if (productsInCart.length !== 0) {
      if (timeLeft <= 0) {
        window.alert("your reservation time ran out. try again")
        setProductsInCart([])
        setTimeLeft(300)
        router.push("/")
        return;
      }
      const counter = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(counter);
    }
  },[productsInCart,setProductsInCart,timeLeft,setTimeLeft,router]);
  if (productsInCart.length !== 0) {
    return (
      <div className={styles.countdownWrapper}>
        <span className={styles.time}>{Math.floor(timeLeft/60)}:{timeLeft%60<10?"0"+timeLeft%60:timeLeft%60}</span>
        <span className={styles.progressBar} style={{ width: `${(timeLeft / seconds) * 100}%`, backgroundColor: `color-mix(in hsl, #EA4BC8, green ${(timeLeft / seconds) * 100}%)` }}></span>
      </div>
    );
  } else {
    return;
  }
}
