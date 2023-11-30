/* vores fetch function der henter data fra vores api med et specificeret endpoint */
/* OBS
is server side component skal den bruges i en async funktion for at hente dataen korrekt 
i client side component skal den bruges i en async funktion sammen med useEffect hook*/
async function FFGet(endpoint) {
  const url = "http://localhost:8080/";
  const res = await fetch(url + endpoint);
  const data = await res.json().catch((err) => console.error(err));
  return data;
}
async function FFSchedule(day) {
  let completeSchedule = await FFGet("schedule");
  let daysProgram = [];
  Object.keys(completeSchedule).forEach((venue) => {
    daysProgram.push({ [venue]: completeSchedule[venue][day] });
  });
  return daysProgram;
}
export { FFGet, FFSchedule };
