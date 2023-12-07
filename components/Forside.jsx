import styles from "./Forside.module.css";
import KoncertCard from "./KoncertCard";
import News from "./News";
import PlayingNow from "./PlayingNow";
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


<PlayingNow/>

      <div className={styles.forsideContentBottom}>
        <News />
        <h2 className={styles.forsideH2}>13 New Bands Booked for Foofest</h2>
        <div className={styles.forsideMobileGrid}>
          <div className={styles.forsideArrowLeft}></div>
          <img src="/placeholdecard.png" width={170} alt="placeholdecard" />
          <div className={styles.forsideArrowRight}></div>
        </div>

        <button className={styles.forsideBottomButton}>
          <a className={styles.forsideAtags} href="/program">
            See full programme
          </a>
        </button>
      </div>
    </section>
  );
}
