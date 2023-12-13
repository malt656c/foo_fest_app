"use client";
import React, { useEffect, useState, useContext } from "react";
import styles from "./TentBooking.module.css";
import Link from "next/link";
import { FFGet } from "./Utilities";
import { dataContext } from "../src/app/contexts/basketContext";
const products = [
  {
    id: 4,
    name: "2 Person tent",
    price: 299,
  },
  {
    id: 5,
    name: "3 Person tent",
    price: 349,
  },
];

const CampAreas = [
  {
    id: 6,
    name: "Svartheim",
  },
  {
    id: 7,
    name: "Nilfheim",
  },
  {
    id: 8,
    name: "Helheim",
  },
  {
    id: 9,
    name: "Muspelheim",
  },
  {
    id: 10,
    name: "Alfheim",
  },
  {
    id: 11,
    name: "Surprise",
  },
];
export default function TentBooking() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [btnState, setBtnState] = useState(false);
  const [available, setAvailableData] = useState([]);
  const { userInfo, setUserInfo, productsInCart, setProductsInCart } = useContext(dataContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://tranquil-groovy-fossa.glitch.me//available-spots");

        if (!res.ok) {
          throw new Error("ERROR");
        }
        const data = await res.json();

        setAvailableData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  //const response = await FFGet("available-spots");

  function getAvailableSpots(areaName) {
    const area = available.find((data) => data.area === areaName);
    return area ? area.available : "Surprise";
  }

  function addToBasket() {
    setProductsInCart((o) => o.concat({ ...products[0], count: count }));
  }

  function addToBasket2() {
    setProductsInCart((o) => o.concat({ ...products[1], count: count2 }));
  }

  function handleClick() {
    setBtnState(!btnState);
  }

  let toggleClassCheck = btnState ? "active" : "";

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  function increment2() {
    setCount2(count2 + 1);
  }

  function decrement2() {
    if (count > 0) setCount2(count2 - 1);
  }

  return (
    <div>
      <div className={styles.ChooseTent}>
        <h2 className={styles.Tentheadline}>Choose your camping area</h2>
        <div className={styles.Tentareas}>
          {CampAreas.map((area) => (
            <div key={area.id}>
              <h3 className={styles.Tentbtn}>{area.name}</h3>
              <p className={styles.spotsAvailable}>{`Available spots: ${getAvailableSpots(area.name)}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mapsection}>
        <div>
          <button className={`${toggleClassCheck} ${styles.campingbtn}`} onClick={handleClick}>
            Check out our camping areas
          </button>
        </div>
        {btnState && <img src="/Foofestmap.jpg" alt="foofestmap" className={styles.image} />}
      </div>
      <div className={styles.TentCard}>
        <h1 className={styles.Heading}>Tents</h1>
        <h3 className={styles.h3}>Do you want a tent with that?</h3>
        <p className={styles.Text}>We will make sure to setup a tent for you and your fellow campers so you do not have to worry about anything else but to party.</p>
        <div className={styles.Info}>
          <p className={styles.Text}>{products[0].name}</p>
          <p className={styles.Price}>{products[0].price} DKK</p>
        </div>
        <div className={styles.Counter}>
          <button className={styles.Counterbtn} onClick={decrement}>
            -
          </button>{" "}
          {count}{" "}
          <button className={styles.Counterbtn} onClick={increment}>
            +
          </button>
        </div>
        <div>
          <button className={styles.Button} onClick={addToBasket}>
            Add to Cart
          </button>
        </div>
        <div className={styles.Info}>
          <p className={styles.Text}>{products[1].name}</p>
          <p className={styles.Price}>{products[1].price} DKK</p>
        </div>
        <div className={styles.Counter}>
          <button className={styles.Counterbtn} onClick={decrement2}>
            -
          </button>{" "}
          {count2}{" "}
          <button className={styles.Counterbtn} onClick={increment2}>
            +
          </button>
        </div>
        <div>
          <button className={styles.Button} onClick={addToBasket2}>
            Add to Cart
          </button>
        </div>
      </div>
      <Link href="/greencamping" className={styles.alink}>
        <button className={styles.ButtonBottom}>Next</button>
      </Link>
    </div>
  );
}
