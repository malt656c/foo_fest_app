import styles from "./Forside.module.css";
import KoncertCard from "./KoncertCard";
export default function Forside() {
  return (
    <section className={styles.forsideWrapper}>
      <div className={styles.forsideContent}>
        <h1 className={styles.forsideHeader}>FooFest</h1>
        <button className={styles.forsideButton}>
          <a className={styles.forsideAtags} href="/booking">
            Buy tickets
          </a>
        </button>
      </div>

      <div className={styles.forsideBanner}>Her skal banneret ind</div>
      <div className={styles.forsideContentBottom}>
        <h2 className={styles.forsideH2}>13 New Bands Booked for Foofest</h2>
        <div className={styles.forsideMobileGrid}>
          <div className={styles.forsideArrowLeft}></div>
          <img src="/placeholdecard.png" width={170} alt="placeholdecard" />
          <div className={styles.forsideArrowRight}></div>
        </div>

        <button className={styles.forsideBottomButton}>
          <a className={styles.forsideAtags} href="/program">
            Fuldt program
          </a>
        </button>
      </div>
    </section>
  );
}
