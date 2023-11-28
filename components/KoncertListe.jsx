import KoncertCard from "./KoncertCard";
import { FFGet } from "./Utilities";
export default async function getData() {
  let repo = await FFGet("bands");
  console.log(repo);
  return (
    <div>
      {repo.map((band) => (
        <KoncertCard key={band.slug} name={band.name}></KoncertCard>
      ))}
    </div>
  );
}
