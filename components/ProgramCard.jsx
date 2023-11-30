import styles from "./ProgramCard.module.css";
export default async function ProgramCard(props) {
    return (
<a href={`/band/${props.slug}`}>
        <article className={styles.card}>
  
        </article>
</a>
    );
  }

