"use client";
import styles from "./Checkout.module.css";
import { useContext } from "react";
import { dataContext } from "../src/app/contexts/basketContext";
import { useRouter } from "next/navigation";
import UsersOrder from "./UsersOrder";
import CheckoutInput from "./CheckoutInput";
export default function Checkout() {
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);
  const router = useRouter();
  const SubmitEvent = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = { ...Object.fromEntries(formData), productsBought: [...productsInCart] };
    delete data.myCheckbox;
    setUserInfo(data);
    router.push("/payment");
  };
  return (
    <section className={styles.checkoutWrapper}>
      <form className={styles.checkoutForm} onSubmit={SubmitEvent}>
        <UsersOrder></UsersOrder>
        <div className={styles.inputWrapper}>
          <h2>Personal information</h2>
          <CheckoutInput name="firstName" label="First Name" required />
          <CheckoutInput name="lastName" label="Last Name" required />
          <CheckoutInput name="address" label="Address" required />
          <div className={styles.checkoutEtage}>
            <CheckoutInput name="floor" label="Floor" />
            <CheckoutInput name="door" label="Door" />
          </div>
          <CheckoutInput type="number" name="zipCode" label="Zipcode" required />
          <CheckoutInput name="city" label="City" required />
          <CheckoutInput type="email" name="email" label="Email" required />
          <CheckoutInput type="tel" name="phone" label="Phone Number" required />
          <CheckoutInput name="comments" label="Comments" />

          <div className={styles.paymentOptions}>
            <h3>Payment Method</h3>
            <div>
              <label htmlFor="card">Card</label>
              <input type="radio" name="paymentMethod" id="card" value="card" />
            </div>
            <div>
              <label htmlFor="mobilepay">MobilePay</label>
              <input type="radio" name="paymentMethod" id="mobilepay" value="mobilepay" />
            </div>
            <div>
              <label htmlFor="giftcard">Giftcard</label>
              <input type="radio" name="paymentMethod" id="giftcard" value="giftcard" />
            </div>
            <div>
              <label htmlFor="viabill">Viabill</label>
              <input type="radio" name="paymentMethod" id="viabill" value="viabill" />
            </div>
          </div>
        </div>
        <div className={styles.termsWrapper}>
          <input type="text" name="promoCode" placeholder="Enter Promocode" />

          <div className={styles.termsOfService}>
            <input type="checkbox" id="myCheckbox" name="myCheckbox" required />
            <label htmlFor="myCheckbox">Jeg accepterer handelsbetingelserne og giver samtykke til at Foo-Fest behandler mine persondata.</label>
          </div>
        </div>
        <button role="button" className={styles.checkoutButton}>
          Confirm order
        </button>
      </form>
    </section>
  );
}
