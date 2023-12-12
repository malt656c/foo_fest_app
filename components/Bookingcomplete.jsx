"use client";
import { useContext } from "react";
import Link from "next/link";
import styles from "./BookingComplete.module.css";
import { userContext } from "../src/app/contexts/basketContext";
export default function BookingComplete() {
  const { userInfo, setUserInfo } = useContext(userContext);
  console.log(userInfo);
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
