"use client";
import styles from "./Menu.module.css";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import MenuLink from "./MenuLink";
export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  const [translation, setTranslation] = useState("-100%");
  const linkOnClick = () => {
    setOpen(false);
    setTranslation("-100%");
  };
  /* TODO: accesability på burger menu */
  return (
    <>
      <button
        className={styles.burgerIcon}
        tabIndex={0}
        aria-expanded="true"
        aria-label="Main menu"
        onKeyDown={(e) => {
          e.preventDefault();
          if (e.key === " " || e.key === "Enter") {
            isOpen ? setOpen(false) : setOpen(true);
            !isOpen ? setTranslation("0%") : setTranslation("-100%");
            e.currentTarget.nextElementSibling.firstChild.focus();
          }
        }}
      >
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
      </button>
      <nav
        className={styles.menuBackground}
        role="navigation"
        style={{
          transform: `translateY(${translation})`,
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            isOpen ? setOpen(false) : setOpen(true);
            !isOpen ? setTranslation("0%") : setTranslation("-100%");
            e.currentTarget.blur();
            e.target.blur();
          }
        }}
      >
        <MenuLink
          link="/program"
          content="Program"
          click={() => {
            linkOnClick();
          }}
          isVisible={isOpen}
        />
        <MenuLink
          link="/booking"
          content="Tickets"
          click={() => {
            linkOnClick();
          }}
          isVisible={isOpen}
        />
        <MenuLink
          link="/"
          content="News"
          click={() => {
            linkOnClick();
          }}
          isVisible={isOpen}
        />
        <MenuLink
          link="/"
          content="Volunteer"
          click={() => {
            linkOnClick();
          }}
          isVisible={isOpen}
        />
        <MenuLink
          link="/"
          content="About"
          click={() => {
            linkOnClick();
          }}
          isVisible={isOpen}
        />
        <MenuLink
          link="/"
          content="Contact"
          click={() => {
            linkOnClick();
          }}
          isVisible={isOpen}
        />
      </nav>
    </>
  );
}

//Translate menu 100 % så den er ude af skærmen.
//Når der klikkes på den skal den translate til 0, så den så fylder hele skærmen (vh)

/* <span className={styles.menuH2span1}>program</span>; */
