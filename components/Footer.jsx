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
          <Link className={styles.footerLink} href="/">
            <p>Questions</p>
          </Link>
          <Link className={styles.footerLink} href="/">
            <p>Contact</p>
          </Link>
        </div>
        <div>
          <Link className={styles.footerLink} href="/">
            <p>Cancellation & Refund</p>
          </Link>
          <Link className={styles.footerLink} href="/">
            <p>Terms and Conditions</p>
          </Link>
          <Link className={styles.footerLink} href="/">
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
      <div className={styles.footerGapGrid}>
        <div>
          <h3 className={styles.footerH3}>About</h3>
        </div>
        <div>
          <Link className={styles.footerLink} href="/">
            <p>Job & Careers</p>
          </Link>
          <Link className={styles.footerLink} href="/">
            <p>Volunteer</p>
          </Link>
          <Link className={styles.footerLink} href="/">
            <p>Sponsers & Partners</p>
          </Link>
        </div>
      </div>
      <div className={styles.footerGapGrid}>
        <div>
          <h3 className={styles.footerH3}>Follow us on social media</h3>
        </div>
        <div className={styles.footerIcons}>
          <Link href="https://www.facebook.com/" target="blank">
            <img className={styles.footerImg} src="/facebook-f.svg" alt="facebook" />
          </Link>
          <Link href="https://www.facebook.com/" target="blank">
            <img className={styles.footerImg} src="/instagram(2).svg" alt="instagram" />
          </Link>
          <Link href="https://www.facebook.com/" target="blank">
            <img className={styles.footerImg} src="/tiktok.svg" alt="tiktok" />
          </Link>
        </div>
      </div>
    </section>
  );
}
