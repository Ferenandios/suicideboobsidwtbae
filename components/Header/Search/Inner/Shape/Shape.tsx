"use client";

import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import styles from "./Shape.module.css";
import Image from "next/image";

const Shape: FC = (): JSX.Element => {
  const { searchIcon } = useAppSelector((state) => state.header);
  return (
    <>
      <div className={styles.ansoc}>
        <Image className={styles.img} src={searchIcon} alt="Shape" />
      </div>
    </>
  );
};

export default Shape;
