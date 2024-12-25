"use client";

import { FC } from "react";
import Content from "./Content/Content";
import styles from "./MainPage.module.css";
import { useAppSelector } from "@/hooks";

const MainPage: FC = (): JSX.Element => {
  const { burgerIsOpen, isShowModal } = useAppSelector((state) => state.global);
  return (
    <>
      <main className={`${burgerIsOpen || isShowModal ? styles.inner : ""}`}>
        <Content />
      </main>
    </>
  );
};

export default MainPage;
