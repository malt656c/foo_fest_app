import styles from "./Program.module.css";
import ProgramListe from "./ProgramListe";
export default function Program() {
  return (
    <section className={styles.programSection}>
      <ProgramListe></ProgramListe>
    </section>
  );
}
