"use client";
import styles from "./Menu.module.css";
export default function Menu() {
  return (
    <section className={styles.menuBackground}>
      <h2 className={styles.menuH2}>
        Program <span className={styles.menuH2span1}>program</span> <span className={styles.menuH2span2}>program</span>
      </h2>
      <h2 className={styles.menuH2}>Billetter</h2>
      <h2 className={styles.menuH2}>Nyheder</h2>
      <h2 className={styles.menuH2}>Bliv Frivillig</h2>
      <h2 className={styles.menuH2}>Om Foofest</h2>
      <h2 className={styles.menuH2}>Kontakt</h2>
    </section>
  );
}

//Translate menu 100 % så den er ude af skærmen.
//Når der klikkes på den skal den translate til 0, så den så fylder hele skærmen (vh)
