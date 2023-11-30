import styles from "./Header.module.css";
export default function Header() {
  return (
    <section className={styles.headerBackground}>
      <a href="/">
        <img src="/mobilelogo.svg" alt="logo" />
      </a>
      <a href="/sletmigmenu">
        <img src="/burger.svg" alt="burgermenu" />
      </a>
    </section>
  );
}
