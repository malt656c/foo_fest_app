import SingleBand from "../../../../components/SingleBand";
import { FFGet } from "../../../../components/utilities";
export default async function Page({ params }) {
  const data = await FFGet(`bands/${params.slug}`);
  console.log(await data)
  return <SingleBand content={data}></SingleBand>;
}
