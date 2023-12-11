"use client";
import styles from "./Payment.module.css";
import { useContext } from "react";
import { userContext } from "../src/app/contexts/basketContext";
export default function Payment() {
  const {userInfo, setUserInfo}=useContext(userContext)
  console.log(userInfo)
  return (
    <section className={styles.paymentWrapper}>
      <div className={styles.paymentOplysninger}>
        <h2 className={styles.paymentH2}>Payment Details</h2>

        <form className={styles.paymentFormGrid}>
          <label className={styles.paymentLabel} htmlFor="navn">
            Navn På Kortet
          </label>
          <input className={styles.paymentInput} type="text" name="navn" id="navn" required />
          <label className={styles.paymentLabel} htmlFor="kortnummer">
            Card Number
          </label>
          <input className={styles.paymentInput} type="number" name="kortnummer" id="kortnummer" required />
          <div className={styles.paymentExpire}>
            <div className={styles.paymentCVC}>
              <label className={styles.paymentLabel} htmlFor="expiredate">
                Expire Date
              </label>
              <input className={styles.paymentInput} type="text" name="expiredate" id="expiredate" pattern="\d{2}/\d{2}" placeholder="xx/xx" required />
            </div>
            <div className={styles.paymentCVC}>
              <label className={styles.paymentLabel} htmlFor="CVC">
                CVC
              </label>
              <input className={styles.paymentInput} type="number" min={0} max={999} name="CVC" id="CVC" required />
            </div>
          </div>
        </form>
        <div className={styles.paymentButtonContainer}>
          <a href="/ordercomplete">
            <button className={styles.paymentConfirmButton}>Confirm Payment</button>
          </a>
        </div>
      </div>
    </section>
  );
}
