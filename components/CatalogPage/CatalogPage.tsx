"use client";

import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentService } from "@/features/global.slice";
import Content from "./Content/Content";
import { notFound } from "next/navigation";

const CatalogPage: FC<{ itemId: string }> = ({ itemId }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { services, currentService } = useAppSelector((state) => state.global);
  const service =
    itemId !== undefined && !isNaN(+itemId) && +itemId <= 4
      ? services[+itemId]
      : null;
  useEffect(() => {
    if (service) dispatch(setCurrentService(service));
  }, [dispatch, service, currentService]);
  return <>{service ? <Content /> : notFound()}</>;
};

export default CatalogPage;
