"use client";
import Image from "next/image";
import styles from "./SingleBand.module.css";
import { FFGet } from "./utilities";
import { useEffect, useState } from "react";
export default function SingleBand(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function GetData() {
      setData(await FFGet(`bands/${props.slug}`));
    }
    GetData();
  });
  const url = "http://localhost:8080/logos/";
  console.log(data);
  if (data !== null) {
    const imageSource = () => {
      if (data.logoCredits || !data.logo.includes("http")) {
        return (
          <div className={styles.imageWrapper}>
            <Image src={url + data.logo} alt={data.name} height={350} width={350} className={styles.bandImage} />
            <span className={styles.logoCredits}>*credits</span>
          </div>
        );
      } else {
        return <Image src={data.logo} alt={data.name} height={350} width={350} className={styles.bandImage} />;
      }
    };
    return (
      <section className={styles.wrapper}>
        <article className={styles.bandContent}>
          <h1 className={styles.bandH1}>{data.name}</h1>
          <div className={styles.mobileWrapper}>
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
              <p>Credits: {data.logoCredits}</p>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
