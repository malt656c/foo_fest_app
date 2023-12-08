import React from "react";
import styles from "./Shoppingcart.module.css";
export default function Shoppingcart({ visibility, products, onProductRemove, onClose, onQuantityChange }) {
  return (
    <div className={styles.wrapper} style={{ display: visibility ? "block" : "none" }}>
      <div className={styles.header}>
        <h2>Shopping Cart</h2>
        <button className={styles.btn + " " + styles.closebtn} onClick={() => (cartVisibility ? setCartVisible(false) : setCartVisible(true))}>
       <img src="/xmark-solid.svg" alt="Close" />
       </button>
      </div>
      <div className={styles.cartproducts}>
        {products.length === 0 && <span className={styles.emptytext}>Your basket is currently empty</span>}
        {products.map((product) => (
          <div className={styles.cartproduct} key={product.id}>
            <div className={styles.productinfo}>
              <h3>{product.name}</h3>
              <div className={styles.prdct}>
              <span className={styles.productprice}>
                {product.count}Stk</span>
                <div className={styles.pricaandremove}>
                <span>{product.price}DKK</span>
           {/*    <select
                className={styles.count}
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select> */}
              <button className={styles.btn + " " + styles.removebtn} onClick={() => onProductRemove(product)}>
              <img src="/xmark-solid.svg" alt="Close" /></button>
            </div>
            </div>
            </div>
          </div>
        ))}
        <a href="/checkout">
        <div className={styles.probtn}>
        {products.length > 0 && <button className={styles.btn + " " + styles.checkoutbt}>Proceed to checkout</button>}
        </div>
        </a>
      </div>
    </div>
  );
}
