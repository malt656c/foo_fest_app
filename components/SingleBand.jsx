import Image from "next/image";
import styles from "./SingleBand.module.css";
import { FFGet } from "./Utilities";
import Link from "next/link";
export default async function SingleBand(props) {
  const data = await FFGet(`bands/${props.slug}`);

  const url = "http://localhost:8080/logos/";
  if (data !== null) {
    const imageSource = () => {
      if (data.logoCredits || !data.logo.includes("http")) {
        return (
          <div className={styles.imageWrapper}>
            <Image src={url + data.logo} alt={data.name} height={350} width={350} className={styles.bandImage}/>
            <details className={styles.logoCredits}>
              <summary>photo credits</summary>
              <p>{data.logoCredits}</p>
            </details>
          </div>
        );
      } else {
        return (
          <div className={styles.imageWrapper}>
            <Image src={data.logo} alt={data.name} height={350} width={350} className={styles.bandImage}/>
          </div>
        );
      }
    };
    return (
      <section className={styles.wrapper}>
        <article className={styles.bandContent}>
          <h1 className={styles.bandH1}>{data.name}</h1>
          {imageSource()}

          <div className={styles.bandInfo}>
            <div className={styles.bandGeneral}>
              <div className={styles.bandGenre}>
                <h2>Genre: </h2>
                <h2 className={styles.h2Pink}>{data.genre}</h2>
              </div>
              <div className={styles.bandMembers}>
                <h3>Members:</h3>
                <div>
                  {data.members.map((member) => {
                    return <span key={member}>{member}</span>;
                  })}
                </div>
              </div>
            </div>
            <p>{data.bio}</p>
          </div>
        </article>
        <Link href={"/program"} className={styles.ButtonBack} type="button">
          Back
        </Link>
      </section>
    );
  }
}
