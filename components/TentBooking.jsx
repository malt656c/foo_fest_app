import styles from "./TentBooking.module.css";
export default function TentBooking() {
    return(
        <div className={styles.TentCard}>
        <h1 className={styles.Heading}>Tents</h1>
        <h3 className={styles.H3}>Do you want a tent with that?</h3>
        <p className={styles.Text}>We will make sure to setup a tent for you and your fellow campers so you do not have to worry about anything else but to party.</p>
        <div className={styles.Info}>
        <p className={styles.Text}>2 persons</p>
        <p className={styles.Price}>299 DKK</p>
        </div>
        <div className={styles.Counter}>
   <button className={styles.Counterbtn}>-</button> 1 <button className={styles.Counterbtn}ß>+</button>
</div>
<div className={styles.Info}>
<p className={styles.Text}>3 persons</p>
<p className={styles.Price}>349 DKK</p>
</div>
<div className={styles.Counter}>
   <button className={styles.Counterbtn}>-</button> 1 <button className={styles.Counterbtn}ß>+</button>
</div>
<a href="/greencamping">
<button className={styles.Button}>Add to bag</button>
</a>
<a href="/checkout">
<button className={styles.Button}>skip</button>
</a>
</div>
    )
}