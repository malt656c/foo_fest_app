"use client";
import { The_Girl_Next_Door } from "next/font/google";
import styles from "./Menu.module.css";
export default function Menu() {
  return (
    <section className={styles.menuBackground}>
      <h2 className={styles.menuH2}>
        Program <span className={styles.menuH2span1}>program</span>
      </h2>
      <h2 className={styles.menuH2}>
        Billetter <span className={styles.menuH2span1}>billetter</span>
      </h2>
      <h2 className={styles.menuH2}>
        Nyheder <span className={styles.menuH2span1}>nyheder</span>
      </h2>
      <h2 className={styles.menuH2}>
        Bliv Frivillig<span className={styles.menuH2span1}>bliv frivillig</span>
      </h2>
      <h2 className={styles.menuH2}>
        Om Foofest <span className={styles.menuH2span1}>om foofest</span>
      </h2>
      <h2 className={styles.menuH2}>
        Kontakt<span className={styles.menuH2span1}>kontakt</span>
      </h2>
    </section>
  );
}

//Translate menu 100 % så den er ude af skærmen.
//Når der klikkes på den skal den translate til 0, så den så fylder hele skærmen (vh)

/* <span className={styles.menuH2span1}>program</span>; */
