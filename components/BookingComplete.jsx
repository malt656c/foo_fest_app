"use client";
import { useContext, useEffect } from "react";
import styles from "./BookingComplete.module.css";
import { dataContext } from "../src/app/contexts/basketContext";
import { useRouter } from "next/navigation";
export default function BookingComplete() {
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);
  const router = useRouter();
  useEffect(() => {
    async function sendData(content) {
      let headersList = {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5dHplcG1ienhjdGN5cXBoc3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMTA2NTAsImV4cCI6MjAxNzg4NjY1MH0.aUz7NArOfzfuujEH7Yea6mxclj9-OvmFl_z7RfcGQ7Q",
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
      return;
    }
    sendData(userInfo);
  });

  return (
    <div className={styles.CompleteCard}>
      <h1 className={styles.Heading}>Thank you!</h1>
      <p className={styles.Text}>Your order is confirmed and we have sent an orderconfirmation to the e-mail: {userInfo.email}. </p>

      <p className={styles.Text}>
        {" "}
        Do you have any further question do not hesitate to contact FooFest on: <br /> contact-foofest@gmail.com
      </p>
      {/*       <Link href="/"> */}
      <button
        className={styles.Button}
        onClick={() => {
          setProductsInCart([]);
          router.push("/");
        }}
      >
        Go to Frontpage
      </button>
      {/*       </Link> */}
    </div>
  );
}
