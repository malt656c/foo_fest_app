"use client";
import ProgramVenue from "./ProgramVenue";
import ProgramCard from "./ProgramCard";
import styles from "./ProgramListe.module.css";
import { useState, useEffect} from "react";
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
      let bandNames = venue[Object.keys(venue)].map((i) => i.act);
      let bands = unfliteredBands.filter((band) => bandNames.includes(band.name));
      let actList = { venue: Object.keys(venue), bands: bands };
      program.push(actList);
    });
    return program;
  };
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

      <div className={styles.venueList}>
        {filteredBands().map((venue) => {
          return (
            <ProgramVenue key={venue.venue} venue={venue.venue}>


                {venue.bands.map((band) => {
                  return <ProgramCard key={band.slug} name={band.name} image={band.logo} imageCredits={band.logoCredits} slug={band.slug}></ProgramCard>;
                })}

            </ProgramVenue>
          );
        })}
      </div>
    </section>
  );
}
