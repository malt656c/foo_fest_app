import AppWrapper from "../../../components/AppWrapper";
import Program from "../../../components/Program";
import Head from "next/head";
export default function Home() {
  return (
    <main>
      <Head>
        <title>Program</title>
      </Head>
      <AppWrapper>
        <Program></Program>
      </AppWrapper>
    </main>
  );
}
