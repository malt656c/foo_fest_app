import ProgramCard from "./ProgramCard";
import { FFGet } from "./Utilities";
export default async function ProgramListe(){
    let bands = await FFGet("bands")
return <section>
    {bands.map((band)=>{return <ProgramCard name={band.name} slug={band.slug}></ProgramCard>})}
</section>
}