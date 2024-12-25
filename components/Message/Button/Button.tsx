"use client";

import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Button.module.css";
import Image from "next/image";

const Button: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  const { logoIcon } = useAppSelector((state) => state.message);
  return (
    <>
      <div style={{ backgroundColor: colorTheme }} className={styles.button}>
        <Image className={styles.img} src={logoIcon} alt="Write" />
      </div>
    </>
  );
};

export default Button;
