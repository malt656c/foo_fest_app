import styles from "./ProgramCard.module.css";
export default async function ProgramCard(props) {
  console.log(props.act)
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

