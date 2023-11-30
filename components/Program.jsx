
import { FFGet, FFSchedule } from "./Utilities";
import styles from "./Program.module.css";
export default async function Program() {
  const schedule = await FFGet("schedule");
  const scheduleDay = await FFSchedule("mon");
  return (
    <section className={styles.programSection}>

    </section>
  );
}
