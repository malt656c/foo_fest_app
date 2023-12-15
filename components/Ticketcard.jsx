"use client";
import React, { useState, useContext } from "react";
import styles from "./Ticketcard.module.css";
import { dataContext } from "../src/app/contexts/basketContext";
export default function Ticketcard(props) {
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);
  const [count, setCount] = useState(1);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function addToBasket() {
    const objectIndex = productsInCart.findIndex((p) => p.id == props.product.id);
    if (objectIndex >= 0) {
      const updatedProducts = [...productsInCart];
      updatedProducts[objectIndex].count = updatedProducts[objectIndex].count + count;
      setProductsInCart(updatedProducts);
    } else {
      setProductsInCart((o) => o.concat({ ...props.product, count: count }));
    }
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
