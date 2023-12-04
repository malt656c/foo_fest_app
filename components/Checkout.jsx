import styles from "./Checkout.module.css";
export default function Checkout() {
  return (
    <section className={styles.checkoutWrapper}>
      <div>
        <h1>Betalingsoplysninger</h1>
        <form className={styles.checkoutFormFlex}>
          <label for="firstName">Fornavn:</label>
          <input type="text" id="firstName" name="firstName" placeholder="Poul-Erik" required></input>

          <label for="lastName">Efternavn:</label>
          <input type="text" id="lastName" name="lastName" required></input>

          <label htmlFor="Adresse">Adresse</label>
          <input type="text" name="Adresse" id="adresse" />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>

          <button>send</button>
        </form>
      </div>
      <div>
        <h1>Dette er din ordreresume</h1>
      </div>
    </section>
  );
}
