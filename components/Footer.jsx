import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <section className={styles.footerBackground}>
      <div className={styles.footerGapGrid}>
        <div>
          <h3 className={styles.footerH3}>Få Hjælp</h3>
        </div>
        <div>
          <p>Ofte stillede sprøgmsål</p>
          <p>Kontakt</p>
        </div>
        <div>
          <p>Fortrydelse & returnering</p>
          <p>Handelsbetingelser</p>
          <p>persondatapolitik</p>
        </div>
      </div>
      <div className={styles.footerGapGrid}>
        <div>
          <h3 className={styles.footerH3}>Om foofest</h3>
        </div>
        <div>
          <p>Job og Karriere</p>
          <p>bliv frivillig</p>
          <p>Samarbejdspartnere</p>
        </div>
      </div>
      <div className={styles.footerGapGrid}>
        <div>
          <h3 className={styles.footerH3}>Følg os på de sociale medier</h3>
        </div>
        <div className={styles.footerIcons}>
          <img className={styles.footerImg} src="/facebook-f.svg" alt="facebook" />
          <img className={styles.footerImg} src="/instagram(2).svg" alt="instagram" />
          <img className={styles.footerImg} src="/tiktok.svg" alt="tiktok" />
        </div>
      </div>
    </section>
  );
}
