import styles from "./Booking.module.css";
import Ticketcard from "./Ticketcard";

const products = [
    {
    id : 1,
    name: "Regular Ticket",
    price: 799,
    },
    {
    id : 2,
    name: "VIP Ticket",
    price: 1299,
    }
]
export default async function Booking() {
    return (
<div className={styles.Background}>
<h1 className={styles.Heading}>Tickets</h1>
<Ticketcard></Ticketcard>
</div>

    )
}