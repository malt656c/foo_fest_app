"use client";
import styles from "./Payment.module.css";
import { useEffect } from "react";

export default function Payment() {
  return (
    <section>
      <div className={styles.paymentOplysninger}>
        <h2 className={styles.paymentH2}>Payment Details</h2>

        <form className={styles.paymentFormGrid}>
          <label className={styles.paymentLabel} htmlFor="navn">
            Navn På Kortet
          </label>
          <input className={styles.paymentInput} type="text" name="navn" id="navn" />
          <label className={styles.paymentLabel} htmlFor="kortnummer">
            Card Number
          </label>
          <input className={styles.paymentInput} type="number" name="kortnummer" id="kortnummer" />
          <div className={styles.paymentExpire}>
            <div className={styles.paymentCVC}>
              <label className={styles.paymentLabel} htmlFor="expiredate">
                Expire Date
              </label>
              <input className={styles.paymentInput} type="text" name="expiredate" id="expiredate" pattern="\d{2}/\d{2}" placeholder="xx/xx" />
            </div>
            <div className={styles.paymentCVC}>
              <label className={styles.paymentLabel} htmlFor="CVC">
                CVC
              </label>
              <input className={styles.paymentInput} type="number" name="CVC" id="CVC" />
            </div>
          </div>
        </form>
        <button className={styles.paymentConfirmButton}>Confirm Payment</button>
      </div>
    </section>
  );
}
