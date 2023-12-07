import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <section className={styles.footerBackground}>
      <div className={styles.footerGapGrid}>
        <div>
          <h3 className={styles.footerH3}>Get Help</h3>
        </div>
        <div>
          <Link href="/">
            <p>Questions</p>
          </Link>
          <Link href="/">Contact</Link>
        </div>
        <div>
          <p>Cancellation & Refund</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className={styles.footerGapGrid}>
        <div>
          <h3 className={styles.footerH3}>About</h3>
        </div>
        <div>
          <p>Job & Careers</p>
          <p>Volunteer</p>
          <p>Sponsers & Partners</p>
        </div>
      </div>
      <div className={styles.footerGapGrid}>
        <div>
          <h3 className={styles.footerH3}>Follow us on social media</h3>
        </div>
        <div className={styles.footerIcons}>
          <Link href="https://www.facebook.com/">
            <img className={styles.footerImg} src="/facebook-f.svg" alt="facebook" />
          </Link>
          <img className={styles.footerImg} src="/instagram(2).svg" alt="instagram" />
          <img className={styles.footerImg} src="/tiktok.svg" alt="tiktok" />
        </div>
      </div>
    </section>
  );
}
