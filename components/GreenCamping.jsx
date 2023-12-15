"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./GreenCamping.module.css";
import { dataContext } from "../src/app/contexts/basketContext";

const products = [
  {
    id: 3,
    name: "Green Camping",
    price: 249,
    count: 1,
  },
];

export default function GreenCamping() {
  const { userInfo, setUserInfo, productsInCart, setProductsInCart, reservationId, setReservationId } = useContext(dataContext);
  useEffect(() => {
    const tentArea = productsInCart.filter((p) => 11 >= p.id && p.id >= 6)[0];
    console.log(tentArea)
    async function ReserveSpot() {
      let headersList = {
        "Content-Type": "application/json"
       }
       let bodyContent = JSON.stringify({
           "area": `${tentArea.name}`,
           "amount": `${tentArea.count}`
         });
       
       let response = await fetch("https://tranquil-groovy-fossa.glitch.me/reserve-spot", { 
         method: "PUT",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data);
      setReservationId(data.id)
    }
   ReserveSpot()
  }, [productsInCart, setReservationId]);
  function addToBasket() {
    setProductsInCart((o) => o.concat({ ...products[0] }));
  }
  console.log(reservationId)
  return (
    <div>
      <div className={styles.GCcard}>
        <h1 className={styles.Heading}>Green Camping?</h1>
        <p className={styles.Text}>
          Do you want to add green camping to your ticket? Green camping makes sure to sustainably remove your tent after the festival and adds reusable cups and straws for the whole camp. We try to
          be good to the enviroment, will you help us?{" "}
        </p>
        <p className={styles.Price}>+ 249 DKK</p>
        <Link href="/checkout" className={styles.alink}>
          <button className={styles.Button} onClick={addToBasket}>
            Add to basket
          </button>
        </Link>
      </div>
      <div className={styles.ButtonDiv}>
        <Link href="/checkout" className={styles.alink}>
          <button className={styles.Button}>SKIP</button>
        </Link>
      </div>
    </div>
  );
}
