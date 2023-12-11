"use client"
import React, {useContext } from "react";
import Link from "next/link";
import styles from "./GreenCamping.module.css";
import { UpdaterContext } from "../src/app/contexts/basketContext";

const products = [
    {
    id: 3,
    name: "Green Camping",
    price: 249,
    }
   ]


export default async function GreenCamping(props) {

const setProductsInCart = useContext(UpdaterContext);
function addToBasket() {
    setProductsInCart((o) => o.concat({ ...props.products}));
  }
    return (
    <div className={styles.GCcard}>
    <h1 className={styles.Heading}>Green Camping?</h1>
    <p className={styles.Text}>Do you want to add green camping to your ticket? Green camping makes sure to sustainably remove your tent after the festival and adds reusable cups and straws for the whole camp. We try to be good to the enviroment, will you help us? </p>
    <p className={styles.Price}>+ 249 DKK</p>
    <button className={styles.Button} onClick={addToBasket}>Add to basket</button>
    <Link href="/checkout" className={styles.alink}>
    <button className={styles.Button}>SKIP</button>
    </Link>
</div>
    )}