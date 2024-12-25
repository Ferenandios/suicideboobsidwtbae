"use client";

import { FC } from "react";
import { useAppSelector } from "../../hooks";
import styles from "./ContactsPage.module.css";
import Content from "./Content/Content";

const ContactsPage: FC = (): JSX.Element => {
  const { burgerIsOpen, isShowModal } = useAppSelector((state) => state.global);
  return (
    <>
      <main className={`${burgerIsOpen || isShowModal ? styles.inner : ""}`}>
        <Content />
      </main>
    </>
  );
};

export default ContactsPage;
