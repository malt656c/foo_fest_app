"use client";
import { useEffect, useState } from "react";
import styles from "./News.module.css";
import { FFGet } from "./utilities";
import { Divide } from "hamburger-react";
export default function News() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    async function getEvents() {
        
      if (events === null) {
        const ffevents=await FFGet("events")
        if(ffevents.length!==0)
        setEvents(ffevents);
      }
    }
    getEvents();
  });
  console.log(events);
  return (
    <section>
      {events?.map((e) => {
        return (
          <div key={e.act.act}>
            <span>{e.act.start}</span>
            <span>{e.act.send}</span>
            <span>{e.act.act}</span>
          </div>
        );
      })}
    </section>
  );
}
