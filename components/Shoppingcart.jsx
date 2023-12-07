import React from "react";
import styles from "./Shoppingcart.module.css";
export default function Shoppingcart({ visibility, products, onProductRemove, onClose, onQuantityChange }) {
  return (
    <div className={styles.wrapper} style={{ display: visibility ? "block" : "none" }}>
      <div className="header">
        <h2>Shopping Cart</h2>
        <button className={styles.btn + " " + styles.closebtn} onClick={onClose}>
          Kryds ikon her
        </button>
      </div>
      <div className={styles.cartproducts}>
        {products.length === 0 && <span className={styles.emptytext}>Your basket is currently empty</span>}
        {products.map((product) => (
          <div className={styles.cartproduct} key={product.id}>
            <div className={styles.productinfo}>
              <h3>{product.name}</h3>
              <span className={styles.productprice}>{(product.price = product.count)}$</span>
              <select
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
              </select>
              <button className={styles.btn + " " + styles.removebtn} onClick={() => onProductRemove(product)}>
                kryds her
              </button>
            </div>
          </div>
        ))}
        {products.length > 0 && <button className={styles.btn + " " + styles.checkoutbt}>Proceed to checkout</button>}
      </div>
    </div>
  );
}
