/* TODO:
som standard skal alle bands vises,
se dagens program-knap,
se specifikke dage filter,
se specifikke scener,
hvert kort skal gå til det specifikke bands side */
import { FFGet, FFSchedule, FFScheduleToday } from "./Utilities";
import styles from "./Program.module.css";
import ProgramListe from "./ProgramListe";
export default async function Program() {
  const schedule = await FFGet("schedule");
  const scheduleDay = await FFSchedule("mon");
  const scheduleToday = await FFScheduleToday();
  console.log(scheduleToday)
  return (
    <section className={styles.programSection}>
<ProgramListe></ProgramListe>
    </section>
  );
}
