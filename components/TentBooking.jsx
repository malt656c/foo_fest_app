"use client"
import React, { useState } from 'react';
import styles from "./TentBooking.module.css";

const products = [
  {
    id: 4,
    name: "2 Person tent",
    price: 299
  },
  {
    id: 5,
    name: "3 Person tent",
    price: 349
  }
]
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
    
    return(<div>
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
<button className={styles.Button}>Add to Cart</button>
</a>
<a href="/checkout" className={styles.alink}>
<button className={styles.Button}>skip</button>
</a>
</div>
<div className={styles.ChooseTent}>
<h2 className={styles.Tentheadline}>Choose your camping area</h2>
<div className={styles.Tentareas}>
<h3 className={styles.Tentbtn}>svartheim</h3>
<h3 className={styles.Tentbtn}>nilfheim</h3>
<h3 className={styles.Tentbtn}>helheim</h3>
<h3 className={styles.Tentbtn}>muspleheim</h3>
<h3 className={styles.Tentbtn}>alfheim</h3>
<h3 className={styles.Tentbtn}>Surprise me</h3>
</div>
</div>
</div>
    )
}