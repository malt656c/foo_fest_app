"use client";
import { useEffect, useState } from "react";
import { FFScheduleToday } from "./utilities";
import styles from "./PlayingNow.module.css";
export default function PlayingNow() {
  const [currentBands, setCurrentBands] = useState(null);
  useEffect(() => {
    async function getCurrentbands() {
      if (currentBands == null) {
        const bandsToday = await FFScheduleToday();
        const currentDay = new Date();
        const currentTime = currentDay.getHours();
        const playingBands = [];
        bandsToday.forEach((venue) => {
          const allBands = Object.values(venue)[0];
          const timeStringToNumber = (string) => {
            return parseInt(string.substring(0, 2));
          };
          let filteredBand=allBands.filter((i) => timeStringToNumber(i.end) >= currentTime && currentTime >= timeStringToNumber(i.start) && i.act !== "break")[0]
          let band = {
            ...filteredBand,
            venue: Object.keys(venue)[0]
          };
          
          playingBands.push(band);
        });
        setCurrentBands(playingBands);
      }
    }
    getCurrentbands();
    console.log(currentBands);
  });
  return (
    <>
      <section className={styles.wrapper}>
        <h2>Playing Now</h2>
        {currentBands?.map((band) => {
          return (
            <div key={band.venue} className={styles.card}>
              <span className={styles.name}>{band.act}</span>
              <span className={styles.venue}>{band.venue}</span>
              <div className={styles.time}>
                <span>{band.start}</span>-<span>{band.end}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
