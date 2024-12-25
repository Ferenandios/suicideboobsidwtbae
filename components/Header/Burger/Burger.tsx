"use client";

import Hamburger from "hamburger-react";
import { FC } from "react";
import { toggleBurgerIsOpen } from "../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import styles from "./Burger.module.css";
import Info from "./Info/Info";

const Burger: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { burgerIsOpen } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.burger}>
        <Hamburger
          toggled={burgerIsOpen}
          toggle={() => dispatch(toggleBurgerIsOpen())}
          direction="right"
          size={28}
          rounded
        />
      </div>
      <nav
        style={{ width: burgerIsOpen ? "100vw" : "" }}
        className={styles.inner}
      >
        <Info />
      </nav>
    </>
  );
};

export default Burger;
