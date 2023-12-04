import styles from "./Checkout.module.css";
export default function Checkout() {
  return (
    <section className={styles.checkoutWrapper}>
      <div className={styles.checkoutOplysninger}>
        <h1>Betalingsoplysninger</h1>
        <form className={styles.checkoutFormGrid}>
          <label className={styles.checkoutLabel} for="firstName">
            Fornavn
          </label>
          <input className={styles.checkoutInput} type="text" id="firstName" name="firstName" placeholder="Poul-Erik" required></input>

          <label className={styles.checkoutLabel} for="lastName">
            Efternavn
          </label>
          <input className={styles.checkoutInput} type="text" id="lastName" name="lastName" required></input>

          <label className={styles.checkoutLabel} htmlFor="Adresse">
            Adresse
          </label>
          <input className={styles.checkoutInput} type="text" name="Adresse" id="adresse" required />

          <div className={styles.checkoutEtage}>
            <div className={styles.checkoutDoor}>
              <label className={styles.checkoutLabel} htmlFor="etage">
                Etage
              </label>
              <input className={styles.checkoutInput} type="text" name="etage" id="etage" />
            </div>
            <div className={styles.checkoutDoor}>
              <label className={styles.checkoutLabel} htmlFor="door">
                Door
              </label>
              <input className={styles.checkoutInput} type="text" name="door" id="door" />
            </div>
          </div>

          <label className={styles.checkoutLabel} htmlFor="postnummer">
            Zip code
          </label>
          <input className={styles.checkoutInput} type="number" name="zipcode" id="zipcode" />

          <label className={styles.checkoutLabel} htmlFor="city">
            City
          </label>
          <input className={styles.checkoutInput} type="text" name="city" id="city" />

          <label className={styles.checkoutLabel} for="email">
            Email:
          </label>
          <input className={styles.checkoutInput} type="email" id="email" name="email" required></input>

          <label className={styles.checkoutLabel} htmlFor="telephonenumber">
            Telephone
          </label>
          <input className={styles.checkoutInput} type="number" name="telephonenumber" id="telephonenumber" />

          <label className={styles.checkoutLabel} htmlFor="kommentar">
            Comments
          </label>
          <input className={styles.checkoutInput} type="text" name="kommentar" id="kommentar" />

          <label className={styles.checkoutLabel} htmlFor="betalingsmetode">
            Payment method
          </label>
          <div className={styles.checkoutButtonGrid}>
            <button>Card/visa</button>
            <button>Mobilepay</button>
            <button>Gavekort</button>
            <button>Viabill</button>
          </div>
        </form>
      </div>
      <div>
        <h1>Dette er din ordreresume</h1>
      </div>
    </section>
  );
}
