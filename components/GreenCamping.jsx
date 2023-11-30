import styles from "./GreenCamping.module.css";
export default async function GreenCamping() {
    return (
<div className={styles.GCcard}>
    <h1 className={styles.Heading}>Green Camping</h1>
    <p className={styles.Text}>Do you want to add green camping to your ticket? Green camping makes sure to sustainably remove your tent after the festival and adds reusable cups and straws for the whole camp. We try to be good to the enviroment, will you help us? </p>
    <p className={styles.Price}>249 DKK</p>
    <button className={styles.Button}>Add to basket</button>
    <button className={styles.Button}>SKIP</button>
</div>
    )}