"use client";

/* TODO:
lav de enkelte cards til components, det vil spare på javascript. 
tæller og add to cart kan med fordel også laves til deres
egne client-side components mens at de andre kort kan laves
til server-side components */
import React, { useState, useContext } from "react";
import styles from "./Ticketcard.module.css";
//HIV STATE UPDATRE FUNKTION IND, DEL 1
import { UpdaterContext } from "../src/app/contexts/basketContext";
export default function Ticketcard() {
  //HIV STATE UPDATRE FUNKTION IND, DEL 2
  const setProductsInCart = useContext(UpdaterContext);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function increment2() {
    setCount2(count2 + 1);
  }
  function decrement2() {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  }

  function addToBasketRegular(){
    setProductsInCart(o=>o.concat({
      name: "Regular Ticket",
      price: 799,
      count: count,
      id:1
    }))
  }

  function addToBasketVip(){
    setProductsInCart(o=>o.concat({
      name: "Ticket VIP",
      price: 799,
      count: count2,
      id:2
    }))
  }

  return (
    <div>
      <div className={styles.Ticketcards}>
        <div className={styles.Card1}>
          <h2 className={styles.Heading}>Regular</h2>
          <p className={styles.Text}>Provides access to all koncerts, everyday of the festival. Also provides acces to tent area of your choosing </p>
          <p className={styles.Price}>799 DKK</p>
          <div className={styles.Counter}>
            <button className={styles.Counterbtn} onClick={decrement}>
              -
            </button>
            <p>{count}</p>
            <button className={styles.Counterbtn} onClick={increment}>
              +
            </button>
          </div>
          <button className={styles.Button} onClick={addToBasketRegular}>Add to Cart</button>
        </div>

        <div className={styles.Card2}>
          <h2 className={styles.Heading}>VIP</h2>
          <p className={styles.Text}>Provides Access to pits, shower facilities, 20% discount on all beverages and includes all regular-ticket benefits. </p>
          <p className={styles.Price}>1299 DKK</p>
          <div className={styles.Counter}>
            <button className={styles.Counterbtn} onClick={decrement2}>
              -
            </button>
            <p>{count2}</p>
            <button className={styles.Counterbtn} onClick={increment2}>
              +
            </button>
          </div>
          <button className={styles.Button} onClick={addToBasketVip}>Add to Cart</button>
        </div>
      </div>
      <div className={styles.Buttons}>
        <a href="/tentbooking" className={styles.btnlink}>
          <button className={styles.Button}>Go to Tent Booking</button>
        </a>
        <a href="/checkout" className={styles.btnlink}>
          <button className={styles.Button}>Skip Tent Booking</button>
        </a>
      </div>
    </div>
  );
}
