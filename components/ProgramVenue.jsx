import ProgramCard from "./ProgramCard";
import styles from "./ProgramVenue.module.css";
export default function ProgramVenue(props) {
  console.log(props.scheduleForDay);
  return (
    <section>
      <h2>{props.venue}</h2>
      <div>
        {props.scheduleForDay.map((i) => {
          <ProgramCard start={i.start} end={i.end} act={i.act}></ProgramCard>;
        })}
      </div>
    </section>
  );
}
