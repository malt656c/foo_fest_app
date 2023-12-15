"use client";
import { useEffect, useState } from "react";
import { FFGet, FFScheduleToday } from "./Utilities";
import styles from "./PlayingNow.module.css";
import Link from "next/link";
export default function PlayingNow() {
  const [currentBands, setCurrentBands] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    async function getCurrentbands() {
      if (currentBands == null) {
        const bandsToday = await FFScheduleToday();
        const Bands = await FFGet("bands");
        const currentDay = new Date();
        const currentTime = currentDay.getHours();
        const playingBands = [];
        bandsToday.forEach((venue) => {
          const allBands = Object.values(venue)[0];
          const timeStringToNumber = (string) => {
            return parseInt(string.substring(0, 2));
          };
   
          let filteredBand = allBands.filter((i) => timeStringToNumber(i.end) >= currentTime && currentTime >= timeStringToNumber(i.start) && i.act !== "break")[0];
          const getBand = Bands.filter((band)=>filteredBand.act==band.name);

          let band = {
            ...filteredBand,
            venue: Object.keys(venue)[0],
            slug: getBand[0].slug
          };
          playingBands.push(band);
        });
        setCurrentBands(playingBands);
      }
    }
    getCurrentbands();
  });
 
  return (
    <>
      <section className={styles.wrapper}>
        <h2>Playing Now</h2>

        <div className={styles.scrollWrapper}>
          {currentBands?.map((band) => {
            return (
              <Link href={`/band/${band.slug}`} key={band.venue} className={styles.playingNowLink}>
                <div  className={styles.card}>
                  <span>{band.venue}</span>
                  <span>●</span>
                  <span>{band.act}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
