"use client";
import { useRouter } from "next/navigation";
import styles from "./MenuLink.module.css";
import Link from "next/link";
export default function MenuLink(props) {
  return (
    <Link className={styles.linkText} href={props.link} onClick={props.click} tabIndex={0} aria-expanded={props.isVisible}  >
      {props.content}
      <span className={styles.effectText}>{props.content}</span>
    </Link>
  );
}
