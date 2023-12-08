"use client";
import React, { useState, useContext } from "react";
//HIV STATE IND DEL 1
import { StateContext } from "../src/app/contexts/basketContext";
import styles from "./Header.module.css";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import Shoppingcart from "./Shoppingcart";
export default function Header() {
  const [cartVisibility, setCartVisible] = useState(false);
  //const [productsInCart, setProducts] = useState([]);
  //HIV STATE IND DEL 2
  const productsInCart = useContext(StateContext);
  return (
      <section className={styles.headerBackground}>
        <Link href={"/"}>
          <Image src="/mobilelogo.svg" alt="logo" height={48} width={48} />
        </Link>
        <div className={styles.CartAndMenu}>
        <Shoppingcart
        visibility={cartVisibility}
        products={productsInCart}></Shoppingcart>
        <button className={styles.cartIcon}  onClick={() => setCartVisible(true)}> 
        <Image src="/cart-shopping-solid.svg" alt="Cart" width={70} height={70}></Image>
        </button>
        <Menu></Menu>
      </div>
    </section>
  );
}
