"use client";

import { FC } from "react";
import { toggleIsShowModal } from "../../../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import styles from "./Exit.module.css";
import Image from "next/image";

const Exit: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { exitIcon } = useAppSelector((state) => state.modal);
  const handleClick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      <button onMouseUp={handleClick} className={styles.button}>
        <Image className={styles.img} src={exitIcon} alt="Exit" />
      </button>
    </>
  );
};

export default Exit;
