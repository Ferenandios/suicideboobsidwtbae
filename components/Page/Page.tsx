"use client";

import { useAppSelector } from "@/hooks";
import { FC } from "react";
import styles from "./Page.module.css";

const Page: FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
  const { burgerIsOpen, isShowModal } = useAppSelector((state) => state.global);
  return (
    <>
      <main className={`${burgerIsOpen || isShowModal ? styles.inner : ""}`}>
        {children}
      </main>
    </>
  );
};

export default Page;
