import styles from "./TentBooking.module.css";
export default function TentBooking() {
    return(
        <div className={styles.TentCard}>
        <h1 className={styles.Heading}>Tents</h1>
        <p className={styles.Text}>2 persons</p>
        <div className={styles.Counter}>
   <button className={styles.Counterbtn}>-</button> 1 <button className={styles.Counterbtn}ß>+</button>
</div>
<p className={styles.Text}>3 persons</p>
<div className={styles.Counter}>
   <button className={styles.Counterbtn}>-</button> 1 <button className={styles.Counterbtn}ß>+</button>
</div>
<button className={styles.Button}>Add to bag</button>
<button className={styles.Button}>skip</button>
</div>
    )
}