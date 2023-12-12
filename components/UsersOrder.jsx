import { useContext } from "react";
import styles from "./UsersOrder.module.css";
import { dataContext } from "../src/app/contexts/basketContext";
export default function UsersOrder() {
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);
  console.log(productsInCart)
  if(productsInCart.length!==0){
      const totalPrice = productsInCart
    .map((product) => product.price * product.count)
    .reduce(function (a, b) {
      return a + b;
    });
    const taxRate = 0.25;
  return (
    <div className={styles.wrapper}>
      <h3>Order Resume</h3>
      {productsInCart?.map((product) => {
        return (
          <div key={product.id} className={styles.productCard}>
            <h4 className={styles.name}>{product.name}</h4>{" "}
            <span className={styles.price}>
              price: <b>{product.price},-</b> per ticket
            </span>
            <span className={styles.amount}>
              amount: <b>{product.count}</b>
            </span>
            <span className={styles.subtotal}>
              subtotal: <b>{product.price * product.count},-</b>
            </span>
          </div>
        );
      })}
      <div className={styles.totalAndTaxes}>
        <span>
          taxes: <b>{totalPrice * taxRate},- </b>
          <small>{`(${taxRate * 100}%)`}</small>
        </span>
        <span>
          total: <b>{totalPrice},-</b>
        </span>
      </div>
    </div>
  )
  }else{
    return <span>no products in cart</span>
  }

  
}
