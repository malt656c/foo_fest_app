"use client";
import styles from "./Menu.module.css";
export default function Menu() {
  return (
    <section className={styles.menuBackground}>
      <h2>Program</h2>
      <h2>Billetter</h2>
      <h2>Nyheder</h2>
      <h2>Bliv Frivillig</h2>
      <h2>Om Foofest</h2>
      <h2>Kontakt</h2>
    </section>
  );
}

//Translate menu 100 % så den er ude af skærmen.
//Når der klikkes på den skal den translate til 0, så den så fylder hele skærmen (vh)
