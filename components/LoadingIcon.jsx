import styles from "./LoadingIcon.module.css";
export default function LoadingIcon() {
  return (
    <section className={styles.loadingScreen}>
      <span className={styles.loadingIcon}></span>
      <span>Loading...</span>
    </section>
  );
}
