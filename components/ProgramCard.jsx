import Image from "next/image";
import styles from "./ProgramCard.module.css";
export default function ProgramCard(props) {
  const url = "http://localhost:8080/logos/";
  const imageSource = () => {
    if (props.imageCredits || !props.image.includes("http")) {
      return (
        <div className={styles.imageWrapper}>
          <Image src={url + props.image} alt={props.name} height={350} width={350} className={styles.bandLogo} />
          <span className={styles.imageCredits}>{props.imageCredits}</span>
        </div>
      );
    } else {
      return <Image src={props.image} alt={props.name} height={350} width={350} className={styles.bandLogo} />;
    }
  };
  return (
    <a href={`/band/${props.slug}`} className={styles.linkWrapper}>
      <article className={styles.card}>
        {imageSource()}
        <div className={styles.bandInfo}>
          <h3 className={styles.bandName}>{props.name}</h3>
          <span className={styles.genre}></span>
        </div>
      </article>
    </a>
  );
}
