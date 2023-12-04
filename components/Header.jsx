import styles from "./Header.module.css";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
export default function Header() {
  return (
      <section className={styles.headerBackground}>
        <Link href={"/"}>
          <Image src="/mobilelogo.svg" alt="logo" height={48} width={48} />
        </Link>

        <Menu></Menu>
      </section>
  );
}
