import AppWrapper from "../../../../components/AppWrapper";
import SingleBand from "../../../../components/SingleBand";
import { FFGet } from "../../../../components/Utilities";
export default async function Page({ params }) {
  return (
    <main>
      <AppWrapper>
       <SingleBand slug={params.slug}></SingleBand>
      </AppWrapper>
    </main>
  );
}
export async function generateStaticParams() {
  const posts = await FFGet('bands')
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}