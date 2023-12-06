"use client";
import { useEffect, useState } from "react";
import styles from "./News.module.css";
import { FFGet } from "./utilities";
export default function News() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    async function getEvents() {
      if (events === null) {
        const ffevents = await FFGet("events");
        if (ffevents.length !== 0) {
          setEvents(ffevents);
        }
      }
    }
    getEvents();
  });
  console.log(events);
  if (events !== null) {
    return (
      <section className={styles.newsWrapper}>
        <h2>Cancellations</h2>
<div className={styles.newsScroll}>
          {events.map((e) => {
            return (
              <div key={e.act.act} className={styles.newsCard}>
                <h3>{e.act.act}</h3>
                <span>{e.scene}</span>
                <div className={styles.time}>
                  <span>{e.day}</span>
                  <span>{e.act.start}</span>
                  <span>-</span>
                  <span>{e.act.end}</span>
                </div>
              </div>
            );
          })}
</div>
      </section>
    );
  }
}
