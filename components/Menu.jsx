"use client";
// import { The_Girl_Next_Door } from "next/font/google";
import styles from "./Menu.module.css";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import MenuLink from "./MenuLink";
export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  const [translation, setTranslation] = useState("-100%");
const linkOnClick=()=>{
  setOpen(false);
  setTranslation("-100%");
}
  return (
    <>
      <div className={styles.burgerIcon}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#ea4bc8"
          easing="ease-in-out"
          rounded
          size={48}
          onToggle={(toggled) => {
            if (toggled) {
              setTranslation("0%");
            } else {
              setTranslation("-100%");
            }
          }}
        />
      </div>
      <nav
        className={styles.menuBackground}
        style={{
          transform: `translateY(${translation})`,
        }}
      >
        <MenuLink
          link="/program"
          content="Programme"
          click={() => {
            linkOnClick()
          }}
        />
        <MenuLink
          link="/booking"
          content="Tickets"
          click={() => {
            linkOnClick()
          }}
        />
        <MenuLink
          link="/"
          content="News"
          click={() => {
            linkOnClick()
          }}
        />
        <MenuLink
          link="/"
          content="Volunteer"
          click={() => {
            linkOnClick()
          }}
        />
        <MenuLink
          link="/"
          content="About"
          click={() => {
            linkOnClick()
          }}
        />
        <MenuLink
          link="/"
          content="Contact"
          click={() => {
            linkOnClick()
          }}
        />
      </nav>
    </>
  );
}

//Translate menu 100 % så den er ude af skærmen.
//Når der klikkes på den skal den translate til 0, så den så fylder hele skærmen (vh)

/* <span className={styles.menuH2span1}>program</span>; */
