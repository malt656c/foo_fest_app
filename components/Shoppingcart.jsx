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
  let productAmount = () => {
    let sum = 0;
    productsInCart?.forEach((product) => {
      sum = sum + product.count;
    });
    return sum;
  };
  return (
    <>
      <div
        className={styles.cartIcon}
        onClick={() => {
          cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
        }}
        tabIndex={0}
        role="button"
      >
        <Image src="/cart-shopping-solid.svg" alt="Cart" width={48} height={48}></Image>
        {productsInCart?.length > 0 && <span className={styles.iconCount}>{productAmount()}</span>}
      </div>
      <section className={styles.wrapper} style={{ translate: cartVisibility ? "0%" : "100%" }}>
        <div className={styles.header}>
          <h2>Shopping Cart</h2>{" "}
          <button className={styles.closeButton} onClick={() => setCartVisibility(false)}>
            <Image src="/xmark-solid.svg" alt="Close" width={24} height={24} />
          </button>
        </div>
        <div className={styles.cartproducts}>
          {productsInCart?.length === 0 && <span className={styles.emptyCart}>Your basket is currently empty</span>}
          {productsInCart.map((product) => (
            <div className={styles.cartProduct} key={product.id}>
              <div className={styles.cartProductInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <span className={styles.productCount}>
                  amount: <b>{product.count}</b>
                </span>
                <span className={styles.productPrice}>
                  individual price: <b>{product.price ? product.price : "free"}</b>
                </span>
                <span className={styles.productPriceToatal}>
                  total price: <b>{product.price ? product.price * product.count : "free"}</b>
                </span>
              </div>
              {11 >= product.id && product.id >= 6 ? (
                ""
              ) : (
                <button onClick={() => setProductsInCart(productsInCart.filter((i) => i.id !== product.id))} className={styles.closeButton}>
                  <Image src="/xmark-solid.svg" alt="Close" width={16} height={16} />
                </button>
              )}
            </div>
          ))}
        </div>
        {productsInCart.filter((p) => 11 >= p.id && p.id >= 6).length > 0 && (
          <Link
            href="/checkout"
            className={styles.checkoutButton}
            onClick={() => {
              cartVisibility ? setCartVisibility(false) : setCartVisibility(true);
            }}
          >
            Proceed to checkout
          </Link>
        )}
      </section>
    </>
  );
}
