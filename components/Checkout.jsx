import styles from "./Checkout.module.css";
export default function Checkout() {
  return (
    <section className={styles.checkoutWrapper}>
      <div className={styles.checkoutOplysninger}>
        <h2 className={styles.checkoutH2}>Betalingsoplysninger</h2>
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
            <button className={styles.checkoutBetalingsButton}>Card/visa</button>
            <button className={styles.checkoutBetalingsButton}>Mobilepay</button>
            <button className={styles.checkoutBetalingsButton}>Gavekort</button>
            <button className={styles.checkoutBetalingsButton}>Viabill</button>
          </div>
        </form>
      </div>
      <div className={styles.checkoutOrderWrapper}>
        <div className={styles.checkoutOrdreResume}>
          <h3 className={styles.checkoutH3}>Order Resume</h3>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Regular ticket x ? </p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Green Camping</p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Telt til x personer</p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutLine}></div>

          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Produkttotal</p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Betalingsgebyr</p>
            <p>???.-</p>
          </div>

          <div className={styles.checkoutLine}></div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Total inklussiv moms</p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Moms udgør</p>
            <p>???.-</p>
          </div>
        </div>
        <div className={styles.checkoutOrdreBottom}>
          <div>
            <input className={styles.checkoutInput} type="text" placeholder="Enter Promocode" />
            <button className={styles.checkoutBetalingsButton}>Send</button>
          </div>
          <div className={styles.checkoutHandelsbetingelser}>
            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
            <p>jeg accepterer handelsbetingelserne og giver samtykke til at Foo-Fest behandler mine persondata.</p>
          </div>
          <div>
            <a href="/payment">
              <button className={styles.checkoutConfirmButton}>Confirm order</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
