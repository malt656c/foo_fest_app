"use client";
import { useEffect, useState } from "react";
import { FFScheduleToday } from "./utilities";
import styles from "./PlayingNow.module.css";
export default function PlayingNow() {
  const [currentBands, setCurrentBands] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
          let filteredBand = allBands.filter((i) => timeStringToNumber(i.end) >= currentTime && currentTime >= timeStringToNumber(i.start) && i.act !== "break")[0];
          let band = {
            ...filteredBand,
            venue: Object.keys(venue)[0],
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
        <div className={styles.scrollWrapper}>
          {currentBands?.map((band) => {
            return (
              <div key={band.venue} className={styles.card} style={{animationPlayState:isPlaying?"running":"paused"}}>
                <span>{band.act}</span>
                <span>●</span>
                <span>{band.venue}</span>
              </div>
            );
          })}
        </div>
        <button onClick={()=>{isPlaying? setIsPlaying(false):setIsPlaying(true)}}>Press for headache</button>
      </section>
    </>
  );
}
