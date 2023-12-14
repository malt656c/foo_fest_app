import styles from "./Booking.module.css";
import Ticketcard from "./Ticketcard";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "Regular Ticket",
    price: 799,
    description: "Provides access to all concerts, everyday of the festival. Also provides acces to tent area of your choosing. ",
    bgColor: "var(--primary_light)",
  },
  {
    id: 2,
    name: "VIP Ticket",
    price: 1299,
    description: "Provides access to pits, shower facilities, 20% discount on all beverages and includes all regular-ticket benefits.",
    bgColor: "var(--secondary_light)",
  },
];
export default async function Booking() {
  return (
    <div className={styles.Background}>
      <h1 className={styles.Heading}>Tickets</h1>
      {products.map((ticket) => {
        return <Ticketcard key={ticket.id} name={ticket.name} price={ticket.price} description={ticket.description} bgColor={ticket.bgColor} product={ticket}></Ticketcard>;
      })}
      <div className={styles.Buttons}>
        <Link href="/tentbooking" className={styles.btnlink}>
          <button className={styles.Button}>Go to Tent Booking</button>
        </Link>
      </div>
    </div>
  );
}
