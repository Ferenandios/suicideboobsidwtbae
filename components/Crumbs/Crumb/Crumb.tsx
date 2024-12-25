"use client";

import { FC } from "react";
import styles from "./Crumb.module.css";
import { ICrumb } from "../../../types/types";
import Link from "next/link";
import { useAppDispatch } from "@/hooks";
import { toggleCrumbIsActive } from "@/features/global.slice";

const Crumb: FC<{ crumb: ICrumb }> = ({ crumb }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (crumb.isActive) return;
    dispatch(toggleCrumbIsActive(crumb.id));
  };
  return (
    <>
      <div className={styles.button}>
        <Link
          onClick={handleClick}
          href={crumb.link}
          className={`${styles.title} ${crumb.isActive && "font-bold"}`}
        >
          {crumb.text}
        </Link>
      </div>
    </>
  );
};

export default Crumb;
