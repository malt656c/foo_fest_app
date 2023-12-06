"use client";
import ProgramCard from "./ProgramCard";
import styles from "./ProgramListe.module.css";
import { useState, useEffect} from "react";
import { FFGet, FFSchedule, FFScheduleToday } from "./utilities";
export default function ProgramListe() {
  const [filter, setFilter] = useState(null);
  const [bands, setBands] = useState(null);
  useEffect(() => {
    async function fetchSchedule() {
      if (filter == null) {
        setBands(await FFGet("bands"))
        setFilter(await FFScheduleToday());
      }
    }
    fetchSchedule();
  }, [filter]);

  const filteredBands = () => {
    let program = [];
    filter?.forEach((venue) => {
      venue[Object.keys(venue)].map((i) => {
        if (i.act !== "break") {
          let bandData = bands.filter((band) => band.name === i.act)[0];
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
  const newFilter = async (event) => {
    const formData = new FormData(event.currentTarget);
    const day = formData.get("day");
    const venue = formData.get("venue");
    let daySchedule;
    if (day == "today") {
      daySchedule = await FFScheduleToday();
    } else if (day !== "today") {
      daySchedule = await FFSchedule(day);
    }
    if (venue == "all") {
      setFilter(daySchedule);
    } else if (venue !== "all") {
      setFilter(daySchedule.filter((v) => Object.keys(v) == venue));
    }
  };
  console.log(filter);
  return (
    <section className={styles.list}>
      <form
        action=""
        className={styles.filterSection}
        onChange={(event) => {
          newFilter(event);
        }}
      >
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
            <option value="all">all</option>
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
