//HIV STATE IND DEL 1
import styles from "./Header.module.css";
import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import Shoppingcart from "./Shoppingcart";
import BookingCountDown from "./BookingCountDown";
export default function Header() {
  //HIV STATE IND DEL 2


  return (
    <section className={styles.headerBackground}>
      <Link href={"/"}>
        <Image src="/mobilelogo.svg" alt="logo" height={48} width={48} priority/>
      </Link>
      <BookingCountDown></BookingCountDown>
      <div className={styles.CartAndMenu}>
        <Shoppingcart ></Shoppingcart>
        <Menu></Menu>
      </div>
    </section>
  );
}
