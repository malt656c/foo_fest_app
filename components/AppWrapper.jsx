import styles from "./AppWrapper.module.css";
export default async function AppWrapper({children}) {
  return <section className={styles.wrapper}>
    {children}
  </section>;
}
