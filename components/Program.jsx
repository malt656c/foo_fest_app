/* TODO:
som standard skal alle bands vises,
se dagens program-knap,
se specifikke dage filter,
se specifikke scener,
hvert kort skal gå til det specifikke bands side */
import { FFGet, FFSchedule, FFScheduleToday } from "./utilities";
import styles from "./Program.module.css";
import ProgramListe from "./ProgramListe";
export default async function Program() {
  const bands = await FFGet("bands");
  const schedule = await FFGet("schedule");
  const scheduleToday = await FFScheduleToday();
  return (
    <section className={styles.programSection}>
      <ProgramListe bands={bands} schedule={schedule}></ProgramListe>
    </section>
  );
}
