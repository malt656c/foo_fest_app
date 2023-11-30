import styles from "./Booking.module.css";
import Ticketcard from "./Ticketcard";
export default async function Booking() {
    return (
<div className={styles.Background}>
<h1 className={styles.Heading}>Tickets</h1>
<Ticketcard></Ticketcard>
</div>

    )
}