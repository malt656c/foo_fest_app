// import styles from "./Forside.module.css";
// import KoncertCard from "./KoncertCard";
// export default function Forside() {
//   return (
//     <section className={styles.forsideWrapper}>
//       <div className={styles.forsideBilledeContainer}>
//         <img className={styles.forsideBillede} src="/frontpagebg.jpg" alt="koncert billede på forsiden" />
//         <div className={styles.forsideContent}>
//           <h1 className={styles.forsideHeader}>FooFest</h1>
//           <button className={styles.forsideButton}>
//             <a href="/program">Buy tickets</a>
//           </button>
//         </div>
//       </div>
//       <div>Her skal banneret ind</div>
//       <div>
//         <h2>13 New Bands Booked for Foofest</h2>
//         <div>
//           <KoncertCard></KoncertCard>
//           <KoncertCard></KoncertCard>
//           <KoncertCard></KoncertCard>
//         </div>
//         <button className={styles.forsideButton}>
//           <a href="/program">Fuldt program</a>
//         </button>
//       </div>
//     </section>
//   );
// }
import styles from "./Forside.module.css";
import KoncertCard from "./KoncertCard";
export default function Forside() {
  return (
    <section className={styles.forsideWrapper}>
      <div className={styles.forsideContent}>
        <h1 className={styles.forsideHeader}>FooFest</h1>
        <button className={styles.forsideButton}>
          <a href="/program">Buy tickets</a>
        </button>
      </div>

      <div className={styles.forsideBanner}>Her skal banneret ind</div>
      <div className={styles.forsideContentBottom}>
        <h2>13 New Bands Booked for Foofest</h2>
        <div>
          <div className={styles.forsideArrowLeft}></div>
          <img src="/placeholdecard.png" alt="placeholdecard" />
        </div>
        <div className={styles.forsideArrowRight}></div>
        <button className={styles.forsideBottomButton}>
          <a href="/program">Fuldt program</a>
        </button>
      </div>
    </section>
  );
}
