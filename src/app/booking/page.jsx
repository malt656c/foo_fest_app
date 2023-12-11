import AppWrapper from "../../../components/AppWrapper";
import Booking from "../../../components/Booking";
import { useContext } from "react";
import { userContext } from "../contexts/basketContext";
export default function Home() {
  return (
    <main>
      <AppWrapper>
<Booking></Booking>
      </AppWrapper>
  </main>
  );
}
