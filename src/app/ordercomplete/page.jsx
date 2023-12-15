import AppWrapper from "../../../components/AppWrapper";
import BookingComplete from "../../../components/BookingComplete";
import Head from "next/head";
export default function Home() {
  return (
    <main>
      <Head>
        <title>Booking Complete</title>
      </Head>
      <AppWrapper>
        <BookingComplete></BookingComplete>
      </AppWrapper>
    </main>
  );
}
