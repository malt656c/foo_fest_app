import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <section className={styles.footerBackground}>
      <div>
        <h3>Få Hjælp</h3>
        <p>Ofte stillede sprøgmsål</p>
        <p>Kontakt</p>

        <p>Fortrydelse & returnering</p>
        <p>Handelsbetingelser</p>
        <p>persondatapolitik</p>
      </div>
      <div>
        <h3>Om foofest</h3>
        <p>Job og Karriere</p>
        <p>bliv frivillig</p>
        <p>Samarbejdspartnere</p>
      </div>
      <div>
        <h3>Følg os på de sociale medier</h3>
        <div className={styles.footerIcons}>
          <p>Facebook</p>
          <p>instagram</p>
          <p>Tiktok</p>
        </div>
      </div>
    </section>
  );
}
