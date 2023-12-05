"use client"
import React, { useState } from 'react';
import styles from "./TentBooking.module.css";
export default function TentBooking() {
 
        const [count, setCount] = useState(0);
      
        function increment() {
          setCount(count + 1);
        }
      
        function decrement() {
          setCount(count - 1);
        }


        const [count2, setCount2] = useState(0);
      
        function increment2() {
          setCount2(count2 + 1);
        }
      
        function decrement2() {
          setCount2(count2 - 1);
        }
    
    return(
        <div className={styles.TentCard}>
        <h1 className={styles.Heading}>Tents</h1>
        <h3 className={styles.H3}>Do you want a tent with that?</h3>
        <p className={styles.Text}>We will make sure to setup a tent for you and your fellow campers so you do not have to worry about anything else but to party.</p>
        <div className={styles.Info}>
        <p className={styles.Text}>2 persons</p>
        <p className={styles.Price}>299 DKK</p>
        </div>
        <div className={styles.Counter}>
   <button className={styles.Counterbtn} onClick={decrement}>-</button> {count} <button className={styles.Counterbtn} onClick={increment}>+</button>
</div>
<div className={styles.Info}>
<p className={styles.Text}>3 persons</p>
<p className={styles.Price}>349 DKK</p>
</div>
<div className={styles.Counter}>
   <button className={styles.Counterbtn} onClick={decrement2}>-</button> {count2} <button className={styles.Counterbtn} onClick={increment2}>+</button>
</div>
<a href="/greencamping" className={styles.alink}>
<button className={styles.Button}>Add to bag</button>
</a>
<a href="/checkout" className={styles.alink}>
<button className={styles.Button}>skip</button>
</a>
</div>
    )
}