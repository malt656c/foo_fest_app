"use client"
import React, { useState } from 'react'; // Kun en import statement

import styles from "./Ticketcard.module.css"; 

export default function Ticketcard() {
    const [count, setCount] = useState(0);
  
    function increment() {
      setCount(count + 1);
    }
  
    function decrement() {
      setCount(count - 1);
    }
  
    return (
        <div className={styles.Ticketcards}>
            <div className={styles.Card1}>
                <h1 className={styles.Heading}>Regular</h1>
                <p className={styles.Text}>Giver adgang til alle koncerter, alle dage og til teltplads i valgfrit teltområde</p>
                <p className={styles.Price}>799 DKK</p>
                <div className={styles.Counter}>
                    <button className={styles.Counterbtn}>-</button>
                    <p>{count}</p>
                    <button className={styles.Counterbtn} onClick={increment}>+</button>
                </div>
                <button className={styles.Button}>BUY</button>
            </div>
            <div className={styles.Card2}>
                <h1 className={styles.Heading}>VIP</h1>
                <p className={styles.Text}>Giver adgang til pit’s, badefaciliteter, 20% rabat på alt drikkelse og det samme som Regular-billet. </p>
                <p className={styles.Price}>1299 DKK</p>
                <div className={styles.Counter}>
                    <button className={styles.Counterbtn} onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button className={styles.Counterbtn} onClick={increment}>+</button>
                </div>
                <button className={styles.Button}>BUY</button>
            </div>
            <a href="/tentbooking">
                <button className={styles.Button}>Go to Tent Booking</button>
            </a>
        </div>
    )
}
