"use client";
import { useState, useEffect } from "react";
import { FFGet } from "./Utilities";
import styles from "./Content.module.css"
export default function Content() {
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
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headline}>Test Side</h1>
      <div className={styles.bandwrapper}>
        {bands?.map((item) => {
          return <p key={item.slug} className={styles.bands}>{item.name}</p>;
        })}
      </div>
    </div>
  );
}
