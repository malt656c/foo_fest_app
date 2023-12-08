import styles from "./Forside.module.css";
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
      <PlayingNow />
      <News />
    </section>
  );
}
