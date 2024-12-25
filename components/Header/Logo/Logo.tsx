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
      <Link onClick={handleClick} className={styles.ansoc} href={mainPage}>
        <Image className="h-[30px] lg:h-[50px]" src={companyLogo} alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
