
import { FFGet, FFSchedule, FFScheduleToday } from "./Utilities";
import styles from "./Program.module.css";
export default async function Program() {
  const schedule = await FFGet("schedule");
  const scheduleDay = await FFSchedule("mon");
  const scheduleNow = await FFScheduleToday();
  console.log(scheduleNow)
  return (
    <section className={styles.programSection}>

    </section>
  );
}
