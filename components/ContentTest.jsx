"use client";
import { useState, useEffect } from "react";
import { FFGet } from "./Utilities";
import styles from "./Content.module.css"
export default function ContentTest() {
  /* vores states som holder vores data når vores fetch promises er resolved */
  const [bands, setBands] = useState(null);
  const [events, setEvents] = useState(null);
  const [schedule, setSchedule] = useState(null);
  /* useEffect kalder vores fetch requests, venter på at de retunerede promises er løst, og sætter vores states til at være vores fetchede data */
  useEffect(() => {
    FFGet("bands").then((bands) => setBands(bands));
    FFGet("events").then((events) => setEvents(events));
    FFGet("schedule").then((schedule) => setSchedule(schedule));
  }, []);
  console.log(bands, events, schedule);
  /* OBS dette er bare en testside for at teste utilities og css modules */
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headline}>Test Side</h1>
      <div className={styles.bandwrapper}>
        {bands?.map((item) => {
          return <p key={item.slug} className={styles.bands}>{item.name}</p>;
        })}
      </div>
      <div className={styles.bandwrapper}>
        <button className={styles.buttons}>Button 1</button>
        <button className={styles.buttons}>Button 2</button>
        <button className={styles.buttons}>Button 3</button>
        <button className={styles.buttons}>Button 4</button>
      </div>
    </div>
  );
}
