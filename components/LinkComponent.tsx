"use client";

import { useAppSelector } from "@/hooks";
import Link from "next/link";
import React from "react";

const LinkComponent = () => {
  const { emails } = useAppSelector((state) => state.global.contacts);
  return (
    <>
      <Link href={"/catalog"}>{emails[0]}</Link>
    </>
  );
};

export default LinkComponent;
