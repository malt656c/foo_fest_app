"use client";
import { useContext, useEffect } from "react";
import styles from "./BookingComplete.module.css";
import { userContext } from "../src/app/contexts/basketContext";
export default function BookingComplete() {
  const { userInfo, setUserInfo } = useContext(userContext);
  console.log(userInfo);
  const userdata = JSON.parse(userInfo);
  useEffect(() => {
    async function sendData(content) {
      let headersList = {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5dHplcG1ienhjdGN5cXBoc3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMTA2NTAsImV4cCI6MjAxNzg4NjY1MH0.aUz7NArOfzfuujEH7Yea6mxclj9-OvmFl_z7RfcGQ7Q",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify(content);

      let response = await fetch("https://rytzepmbzxctcyqphsya.supabase.co/rest/v1/users", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.text();
      console.log(data);
    }
    sendData(userdata);
  });

  return (
    <div className={styles.CompleteCard}>
      <h1 className={styles.Heading}>Tak for dit køb!</h1>
      <p className={styles.Text}>Vi har sendt en ordrebekræftelselse til e-mailen: {userInfo.email}. </p>

      <p className={styles.Text}>Skulle du have yderligere spørgsmål er du velkommen til at kontakte FooFest på kontakt-foofest@gmail.com</p>
      <Link href="/">
        <button className={styles.Button}>Go to Frontpage</button>
      </Link>
    </div>
  );
}
