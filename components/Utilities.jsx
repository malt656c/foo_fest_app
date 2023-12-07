/* vores fetch function der henter data fra vores api med et specificeret endpoint */
/* OBS
i server side component skal den bruges i en async funktion for at hente dataen korrekt 
i client side component skal den bruges i en async funktion sammen med useEffect hook*/
async function FFGet(endpoint) {
  const url = "http://localhost:8080/";
  const res = await fetch(url + endpoint);
  const data = await res.json().catch((err) => console.error(err));
  return data;
}
/* henter schedule for "day" og laver formatet om fra:
{venue:{day:act}}, til: {day:{venue:act}} */
async function FFSchedule(day) {
  let completeSchedule = await FFGet("schedule");
  let daysProgram = [];
  Object.keys(completeSchedule).forEach((venue) => {
    daysProgram.push({ [venue]: completeSchedule[venue][day] });
  });
  return daysProgram;
}
/* henter programmet for idag */
async function FFScheduleToday() {
  let today = new Date();
  /* giver og idags ugedag som 3 små karakterer feks: mon,tue,wed... */
  today = today.toDateString().split(" ")[0].toLowerCase();
  let scheduleToday = await FFSchedule(today);
  return scheduleToday;
}
export { FFGet, FFSchedule, FFScheduleToday };
