import Link from "next/link";
import styles from "./Forside.module.css";
import News from "./News";
import PlayingNow from "./PlayingNow";
export default function Forside() {

  return (
    <section className={styles.forsideWrapper}>
      <div className={styles.forsideContent}>
        <h1 className={styles.forsideHeader}>FooFest</h1>

        <Link className={styles.forsideAtags} href="/booking">
          <button className={styles.forsideButton}> Buy tickets</button>
        </Link>
      </div>
      <PlayingNow />
      <News />
    </section>
  );
}
