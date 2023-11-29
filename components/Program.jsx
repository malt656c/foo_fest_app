import ProgramDay from "./ProgramDay";
import { FFGet } from "./Utilities";
import styles from "./Program.module.css";
export default async function Program() {
  const schedule = await FFGet("schedule");

  return (
    <section className={styles.programSection}>

    </section>
  );
}
