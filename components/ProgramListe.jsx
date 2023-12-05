"use client";
import ProgramVenue from "./ProgramVenue";
import ProgramCard from "./ProgramCard";
import styles from "./ProgramListe.module.css";
import { useState, useEffect } from "react";
import { FFGet, FFSchedule, FFScheduleToday } from "./utilities";
export default function ProgramListe(props) {
  const [filter, setFilter] = useState(null);
  const unfliteredBands = props.bands;
  useEffect(() => {
    async function fetchSchedule() {
      setFilter(await FFScheduleToday());
    }
    fetchSchedule();
  }, []);

  console.log(filter);
  const filteredBands = () => {
    let program = [];
    filter?.forEach((venue) => {
      let bands = venue[Object.keys(venue)].map((i) => {
        if (i.act !== "break") {
          let bandData = unfliteredBands.filter((band) => band.name === i.act)[0];
          let bandObject = {
            ...bandData,
            ...i,
            venue: Object.keys(venue)[0],
          };
          delete bandObject.act;
          program.push(bandObject);
        }
      });
    });
    return program;
  };
  console.log(filteredBands());
  return (
    <section className={styles.list}>
      <form action="" className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <label htmlFor="dayFilter">filter by day</label>

          <select name="day" id="dayFilter">
            <option value="today">Today</option>
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
            <option value="sun">Sunday</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label htmlFor="venueFilter">filter by venue</label>

          <select name="venue" id="venueFilter">
            <option value="tue">all</option>
            <option value="Midgard">Midgard</option>
            <option value="Vanaheim">Vanaheim</option>
            <option value="Jotunheim">Jotunheim</option>
          </select>
        </div>
      </form>

      <div className={styles.bandList}>
        {filteredBands().map((band) => {
          return (
            <ProgramCard key={band.slug} name={band.name} image={band.logo} imageCredits={band.logoCredits} slug={band.slug} start={band.start} end={band.end} venue={band.venue} genre={band.genre}>
              {" "}
            </ProgramCard>
          );
        })}
      </div>
    </section>
  );
}
