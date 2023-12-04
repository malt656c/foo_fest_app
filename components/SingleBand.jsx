"use client";
import Image from "next/image";
import styles from "./SingleBand.module.css";
export default function SingleBand(props) {
  const url = "http://localhost:8080/logos/";
  const data = props.content;
  console.log(data);
  const imageSource = () => {
    if (data.logoCredits || !data.logo.includes("http")) {
      return (
        <div className={styles.imageWrapper}>
          <Image src={url + data.logo} alt={data.name} height={350} width={350} className={styles.bandImage} />
          <span className={styles.logoCredits}>{data.logoCredits}</span>
        </div>
      );
    } else {
      return <Image src={data.logo} alt={data.name} height={350} width={350} className={styles.bandImage} />;
    }
  };
  return (
    <section className={styles.wrapper}>
      <article className={styles.bandContent}>
        {imageSource()}
        <div className={styles.bandInfo}>
          <h1>{data.name}</h1>
          <div className={styles.bandGeneral}>
            <h2>Genre: {data.genre}</h2>
            <div className={styles.bandMembers}>
              <h3>Members:</h3>
              {data.members.map((member) => {
                return <span key={member}>{member}</span>;
              })}
            </div>
          </div>
          <p>{data.bio}</p>
        </div>
      </article>
    </section>
  );
}
