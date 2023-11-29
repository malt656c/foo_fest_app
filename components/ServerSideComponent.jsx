import KoncertCard from "./KoncertCard";
import { FFGet } from "./Utilities";
/* async function bruges for at kunne få dataen som et array istedet for en "promise" */
export default async function ServerSideComponent() {
  let data = await FFGet("bands");
  console.log(data);
  return (
    <div>
      {data.map((band) => (
        <KoncertCard key={band.slug} name={band.name}></KoncertCard>
      ))}
    </div>
  );
}
