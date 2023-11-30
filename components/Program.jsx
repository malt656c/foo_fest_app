import ProgramDay from "./ProgramDay";
import ProgramVenue from "./ProgramVenue";
import { FFGet, FFSchedule } from "./Utilities";
import styles from "./Program.module.css";
export default async function Program() {
  const schedule = await FFGet("schedule");
  const scheduleDay = await FFSchedule("mon");
  console.log(scheduleDay);
  return (
    <section className={styles.programSection}>
      <ProgramDay>
        {scheduleDay.map((venue) => {
          return <ProgramVenue key={Object.keys(venue)} venue={Object.keys(venue)} scheduleForDay={venue[Object.keys(venue)]}></ProgramVenue>;
        })}
      </ProgramDay>
    </section>
  );
}
