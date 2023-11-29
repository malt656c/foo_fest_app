import styles from "./ProgramCard.module.css";
export default function ProgramCard(props) {
  if (props.act === "break") {
    return (
      <div className={styles.break}>
        <h3>Break</h3>
      </div>
    );
  } else {
    return (
      <article className={styles.card}>
        <img src="" alt="" />
        <p>{props.act}</p>
        <div className={styles.time}>
          <span>{props.start}</span>
          <span>-</span>
          <span>{props.end}</span>
        </div>
      </article>
    );
  }
}
