"use client";

import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import styles from "./Logo.module.css";
import Link from "next/link";
import Image from "next/image";
import { toggleCrumbIsActive } from "@/features/global.slice";

const Logo: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { crumbs, companyLogo } = useAppSelector((state) => state.global);
  const mainPage: string =
    crumbs[crumbs.findIndex((crumb) => crumb.link === "/")].link;
  const handleClick = () => {
    dispatch(toggleCrumbIsActive(0));
  };
  return (
    <>
      <div className={styles.ansoc}>
        <Link onClick={handleClick} href={mainPage}>
          <Image className={styles.img} src={companyLogo} alt="Logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
