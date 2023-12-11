"use client";
import styles from "./Checkout.module.css";
import { useContext,  } from "react";
import { StateContext,userContext } from "../src/app/contexts/basketContext";
import Link from "next/link";
import { redirect } from "next/navigation";
export default function Checkout() {
const {userInfo, setUserInfo}=useContext(userContext)
  const productsInCart = useContext(StateContext);
console.log(productsInCart)
  return (
    <section className={styles.checkoutWrapper}>
      <div className={styles.checkoutOplysninger}>
        <h2 className={styles.checkoutH2}>Betalingsoplysninger</h2>
        <form className={styles.checkoutFormGrid}>
          <label className={styles.checkoutLabel} for="firstName">
            Fornavn
          </label>
          <input className={styles.checkoutInput} type="text" id="firstName" name="firstName" placeholder="Poul-Erik" required></input>

          <label className={styles.checkoutLabel} for="lastName">
            Efternavn
          </label>
          <input className={styles.checkoutInput} type="text" id="lastName" name="lastName" placeholder="Jensen" required></input>

          <label className={styles.checkoutLabel} htmlFor="Adresse">
            Adresse
          </label>
          <input className={styles.checkoutInput} type="text" name="Adresse" id="adresse" required placeholder="Østergade 14" />

          <div className={styles.checkoutEtage}>
            <div className={styles.checkoutDoor}>
              <label className={styles.checkoutLabel} htmlFor="etage">
                Etage
              </label>
              <input className={styles.checkoutInput} type="text" name="etage" id="etage" placeholder="1" />
            </div>
            <div className={styles.checkoutDoor}>
              <label className={styles.checkoutLabel} htmlFor="door">
                Door
              </label>
              <input className={styles.checkoutInput} type="text" name="door" id="door" placeholder="tv" />
            </div>
          </div>

          <label className={styles.checkoutLabel} htmlFor="postnummer">
            Zip code
          </label>
          <input className={styles.checkoutInput} type="number" name="zipcode" id="zipcode" placeholder="2200" />

          <label className={styles.checkoutLabel} htmlFor="city">
            City
          </label>
          <input className={styles.checkoutInput} type="text" name="city" id="city" placeholder="København Ø" />

          <label className={styles.checkoutLabel} for="email">
            Email:
          </label>
          <input className={styles.checkoutInput} type="email" id="email" name="email" placeholder="poul-erik@mail.dk" required></input>

          <label className={styles.checkoutLabel} htmlFor="telephonenumber">
            Telephone
          </label>
          <input className={styles.checkoutInput} type="text" name="telephonenumber" id="telephonenumber" placeholder="12345678" pattern="^[0-9]{8}$" />

          <label className={styles.checkoutLabel} htmlFor="kommentar">
            Comments
          </label>
          <input className={styles.checkoutInput} type="text" name="kommentar" id="kommentar" />

          <label className={styles.checkoutLabel} htmlFor="betalingsmetode">
            Payment method
          </label>
          <div className={styles.checkoutButtonGrid}>
            <button className={styles.checkoutBetalingsButton}>Card/visa</button>
            <button className={styles.checkoutBetalingsButton}>Mobilepay</button>
            <button className={styles.checkoutBetalingsButton}>Gavekort</button>
            <button className={styles.checkoutBetalingsButton}>Viabill</button>
          </div>
        </form>
      </div>
      <div className={styles.checkoutOrderWrapper}>
        <div className={styles.checkoutOrdreResume}>
          <h3 className={styles.checkoutH3}>Order Resume</h3>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Regular ticket x ? </p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Green Camping</p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Telt til x personer</p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutLine}></div>

          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Produkttotal</p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Betalingsgebyr</p>
            <p>???.-</p>
          </div>

          <div className={styles.checkoutLine}></div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Total inklussiv moms</p>
            <p>???.-</p>
          </div>
          <div className={styles.checkoutOrdreResumeFlex}>
            <p>Moms udgør</p>
            <p>???.-</p>
          </div>
        </div>
        <div className={styles.checkoutOrdreBottom}>
          <div className={styles.checkoutPromo}>
            <input type="text" placeholder="Enter Promocode" />
            <button>Send</button>
          </div>
          <div className={styles.checkoutHandelsbetingelser}>
            <input type="checkbox" id="myCheckbox" name="myCheckbox" required />
            <p>Jeg accepterer handelsbetingelserne og giver samtykke til at Foo-Fest behandler mine persondata.</p>
          </div>
        </div>
      </div>
      <div className={styles.checkoutOplysninger}>
        <h2 className={styles.checkoutH2}>Betalingsoplysninger</h2>
        <form className={styles.checkoutForm} onSubmit={submitEvent}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="Poul-Erik" required></input>
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Jensen" required></input>
          </div>

          <div>
            <label htmlFor="Adress">Adress</label>
            <input type="text" name="Adress" id="adress" required placeholder="Østergade 14" />
          </div>

          <div className={styles.checkoutEtage}>
            <div>
              <label htmlFor="floor">EFloo</label>
              <input type="text" name="floor" id="floor" placeholder="1" />
            </div>
            <div className={styles.checkoutDoor}>
              <label htmlFor="door">Door</label>
              <input type="text" name="door" id="door" placeholder="tv" />
            </div>
          </div>

          <div>
            <label htmlFor="zipcode">Zip code</label>
            <input type="number" name="zipcode" id="zipcode" placeholder="2200" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" placeholder="København Ø" />
          </div>

          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="poul-erik@mail.dk" required></input>
          </div>

          <div>
            <label htmlFor="phone">Telephone</label>
            <input type="text" name="phone" id="phone" placeholder="12345678" pattern="^[0-9]{8}$" />
          </div>
          <div>
            <label htmlFor="comments">Comments</label>
            <input type="text" name="comments" id="comments" />
          </div>
          <label htmlFor="betalingsmetode">Payment method</label>
          <div className={styles.checkoutButtonGrid}>
            <button>Card/visa</button>
            <button>Mobilepay</button>
            <button>Gavekort</button>
            <button>Viabill</button>
          </div>
<Link href="/payment">
            <button role="button" className={styles.checkoutConfirmButton}>
              Confirm order
            </button>
</Link>
        </form>
      </div>
    </section>
  );
}
