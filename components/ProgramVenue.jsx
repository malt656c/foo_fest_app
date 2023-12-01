import styles from "./ProgramVenue.module.css";
export default function ProgramVenue(props) {
  return (
    <section className={styles.venueWrapper}>
      <h2 className={styles.venueName}>{props.venue}</h2>
      <div className={styles.cardList}>{props.children}</div>
    </section>
  );
}
