"use client";
import React, { useState, useContext } from "react";
//HIV STATE IND DEL 1
import { dataContext } from "../src/app/contexts/basketContext";
import styles from "./Header.module.css";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import Shoppingcart from "./Shoppingcart";
import BookingCountDown from "./BookingCountDown";
export default function Header() {
  const [cartVisibility, setCartVisible] = useState(false);
  //const [productsInCart, setProducts] = useState([]);
  //HIV STATE IND DEL 2
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);

  return (
    <section className={styles.headerBackground}>
      <Link href={"/"}>
        <Image src="/mobilelogo.svg" alt="logo" height={48} width={48} priority/>
      </Link>
      <BookingCountDown></BookingCountDown>
      <div className={styles.CartAndMenu}>
        <Shoppingcart visibility={cartVisibility} products={productsInCart} setCartVisible={setCartVisible}></Shoppingcart>
        <button className={styles.cartIcon} onClick={() => (cartVisibility ? setCartVisible(false) : setCartVisible(true))}>
          <Image src="/cart-shopping-solid.svg" alt="Cart" width={48} height={48}></Image>
        </button>
        <Menu></Menu>
      </div>
    </section>
  );
}
