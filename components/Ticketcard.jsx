import styles from "./Ticketcard.module.css";
export default async function Ticketcard() {
    return (
        <div>
<div className={styles.Card1}>
<h1 className={styles.Heading}>Regular</h1>
<p className={styles.Text}>Giver adgang til alle koncerter, alle dage og til teltplads i valgfrit teltområde</p>
<p className={styles.Price}>799 DKK</p>
<div className={styles.Counter}>
   <button className={styles.Counterbtn}>-</button> 1 <button className={styles.Counterbtn}ß>+</button>
</div>
<button className={styles.Button}>BUY</button>
</div>
<div className={styles.Card2}>
<h1 className={styles.Heading}>VIP</h1>
<p className={styles.Text}>Giver adgang til pit’s, badefaciliteter, 20% rabat på alt drikkelse og det samme som Regular-billet. </p>
<p className={styles.Price}>1299 DKK</p>
<div className={styles.Counter}>
   <button className={styles.Counterbtn}>-</button> 1 <button className={styles.Counterbtn}ß>+</button>
</div>
<button className={styles.Button}>BUY</button>
</div>
</div>
    )
}