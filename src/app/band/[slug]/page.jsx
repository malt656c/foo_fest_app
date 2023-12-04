import AppWrapper from "../../../../components/AppWrapper";
import SingleBand from "../../../../components/SingleBand";
export default async function Page({ params }) {
  return (
    <main>
      <AppWrapper>
       <SingleBand slug={params.slug}></SingleBand>
      </AppWrapper>
    </main>
  );
}
