"use client"
import React, { useState } from 'react';

import styles from "./Ticketcard.module.css"; 

export default function Ticketcard() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  
    function increment() {
      setCount(count + 1);
    }
  
    function decrement() {
      setCount(count - 1);
    }


  
    function increment2() {
      setCount2(count2 + 1);
    }
  
    function decrement2() {
      setCount2(count2 - 1);
    }
  
    return (
        <div>
        <div className={styles.Ticketcards}>
            <div className={styles.Card1}>
                <h1 className={styles.Heading}>Regular</h1>
                <p className={styles.Text}>Provides access to all koncerts, everyday of the festival. Also provides acces to tent area of your choosing </p>
                <p className={styles.Price}>799 DKK</p>
                <div className={styles.Counter}>
                    <button className={styles.Counterbtn} onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button className={styles.Counterbtn} onClick={increment}>+</button>
                </div>
                <button className={styles.Button}>Add to Cart</button>
            </div>
            <div className={styles.Card2}>
                <h1 className={styles.Heading}>VIP</h1>
                <p className={styles.Text}>Provides Access to pits, shower facilities, 20% discount on all beverages and includes all regular-ticket benefits. </p>
                <p className={styles.Price}>1299 DKK</p>
                <div className={styles.Counter}>
                    <button className={styles.Counterbtn} onClick={decrement2}>-</button>
                    <p>{count2}</p>
                    <button className={styles.Counterbtn} onClick={increment2}>+</button>
                </div>
                <button className={styles.Button}>Add to Cart</button>
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
       
    )
}
