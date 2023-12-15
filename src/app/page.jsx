"use client"
import { useEffect } from "react";
import AppWrapper from "../../components/AppWrapper";
import Forside from "../../components/Forside";
export default function Home() {
  useEffect(() => {
    document.title = "FooFest";
  }, []);

  return (
    <main>
      <AppWrapper>
        <Forside></Forside>
      </AppWrapper>
    </main>
  );
}
