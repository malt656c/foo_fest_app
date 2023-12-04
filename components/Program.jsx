/* TODO:
som standard skal alle bands vises,
se dagens program-knap,
se specifikke dage filter,
se specifikke scener */
import { FFGet, FFSchedule, FFScheduleToday } from "./utilities";
import styles from "./Program.module.css";
import ProgramListe from "./ProgramListe";
export default async function Program() {
  const bands = await FFGet("bands");
  return (
    <section className={styles.programSection}>
      <ProgramListe bands={bands}></ProgramListe>
    </section>
  );
}
