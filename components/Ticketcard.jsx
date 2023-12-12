"use client";

/* TODO:
lav de enkelte cards til components, det vil spare på javascript. 
tæller og add to cart kan med fordel også laves til deres
egne client-side components mens at de andre kort kan laves
til server-side components */
import React, { useState, useContext } from "react";
import styles from "./Ticketcard.module.css";
//HIV STATE UPDATRE FUNKTION IND, DEL 1
import { dataContext} from "../src/app/contexts/basketContext";
export default function Ticketcard(props) {
  //HIV STATE UPDATRE FUNKTION IND, DEL 2
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function addToBasket() {
    setProductsInCart((o) => o.concat({ ...props.product, count: count }));

  }

  return (
    <div>
      <div className={styles.Ticketcards}>
        <div className={styles.Card} style={{ backgroundColor: props.bgColor }}>
          <h2 className={styles.Heading}>{props.name}</h2>
          <p className={styles.Text}>{props.description}</p>
          <p className={styles.Price}>{props.price}DKK</p>
          <div className={styles.Counter}>
            <button className={styles.Counterbtn} onClick={decrement}>
              -
            </button>
            <p>{count}</p>
            <button className={styles.Counterbtn} onClick={increment}>
              +
            </button>
          </div>
          <button className={styles.Button} onClick={addToBasket}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
