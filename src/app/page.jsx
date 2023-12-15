import AppWrapper from "../../components/AppWrapper";
import Forside from "../../components/Forside";
import Head from "next/head";
export default function Home() {
  return (
    <main>
      <Head>
        <title>FooFest</title>
      </Head>
      <AppWrapper>
        <Forside></Forside>
      </AppWrapper>
    </main>
  );
}
