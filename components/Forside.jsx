import styles from "./Forside.module.css";
export default function Forside() {
  return (
    <section className={styles.forsideWrapper}>
      <h1 className={styles.forsideHeader}>FooFest</h1>
      <button className={styles.forsideButton}><a href="/program">Se Program</a></button>
    </section>
  );
}
