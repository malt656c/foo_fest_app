"use client";
import React from "react";
import styles from "./Shoppingcart.module.css";
import Link from "next/link";
import { useState, useContext } from "react";
import { dataContext } from "../src/app/contexts/basketContext";
import Image from "next/image";
export default function Shoppingcart() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);
  return (
    <>
      <div
        className={styles.cartIcon}
        onClick={() => {
          cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
        }}
      >
        <Image src="/cart-shopping-solid.svg" alt="Cart" width={48} height={48}></Image>
      </div>
      <section className={styles.wrapper} style={{ translate: cartVisibility ? "0%" : "100%" }}>
        <div className={styles.header}>
          <h2>Shopping Cart</h2>
          <button className={`${styles.btn} ${styles.closebtn}`} onClick={() => setCartVisibility(false)}>
            <Image src="/xmark-solid.svg" alt="Close" width={16} height={16} />
          </button>
        </div>
        <div className={styles.cartproducts}>
          {productsInCart?.length === 0 && <span className={styles.emptytext}>Your basket is currently empty</span>}
          {productsInCart.map((product) => (
            <div className={styles.cartProduct} key={product.id}>
              <h3>{product.name}</h3>
              <span className={styles.productCount}>{product.count}Stk</span>
              <span className={styles.productPrice}>{product.price}DKK</span>
              <button className={styles.btn + " " + styles.removebtn} onClick={() => setProductsInCart(productsInCart.filter((i) => i.id !== product.id))}>
                <Image src="/xmark-solid.svg" alt="Close" width={16} height={16} />
              </button>
            </div>
          ))}
          <Link href="/checkout">{productsInCart?.length && <button className={styles.btn + " " + styles.checkoutbt}>Proceed to checkout</button>}</Link>
        </div>
      </section>
    </>
  );
}
