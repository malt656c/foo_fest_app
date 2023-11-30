import styles from "./Ticketcard.module.css";
export default async function Ticketcard() {
    return (
        <div>
<div className={styles.Card1}>
<h1 className={styles.Heading}>Regular</h1>
<p>Giver adgang til alle koncerter, alle dage og til teltplads i valgfrit teltområde</p>
<p>799 DKK</p>
<button className={styles.Button}>BUY</button>
</div>
<div className={styles.Card2}>
<h1 className={styles.Heading}>VIP</h1>
<p>Giver adgang til pit’s, badefaciliteter, 20% rabat på alt drikkelse og det samme som Regular-billet. </p>
<p>1299 DKK</p>
<button className={styles.Button}>BUY</button>
</div>
</div>
    )
}