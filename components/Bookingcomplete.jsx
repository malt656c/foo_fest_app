import styles from "./BookingComplete.module.css";
export default function BookingComplete() {
    return (
        <div className={styles.CompleteCard}>
        <h1 className={styles.Heading}>Tak for dit køb!</h1>
        <p className={styles.Text}>Vi har sendt en ordrebekræftelselse til e-mailen: xxx@gmail.com. </p>

        <p className={styles.Text}>Skulle du have yderligere spørgsmål er du velkommen til at kontakte FooFest på kontakt-foofest@gmail.com</p>
       
        <button className={styles.Button}>Go to Frontpage</button>
        </div>
    )
}
