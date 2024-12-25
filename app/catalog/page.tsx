import MainPage from "@/components/MainPage/MainPage";
import React from "react";
import { Metadata } from "next";
import { companyNameType } from "@/types/types";

const companyName: companyNameType = "ООО «РЕМИКС»";

export const metadata: Metadata = {
  title: `Услуги - ${companyName}`,
  // title: `Услуги компании | ${companyName} - Ваш надежный партнер в Нижневартовске`,
  description: `${companyName} - широкий спектр услуг в Нижневартовске. Надежность, профессионализм, качество. Цены от 5 000 руб. Встречайте 2024 год с нами!`,
  keywords:
    "ремикс в нижневартовске, ооо ремикс нижневартовск, услуги ремикс, ремикс нв, контакты ремикс, каталог, индустриальная 14 стр 13, remiksnv@yandex.ru, remiksnv, remiks86",
};

const page = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

export default page;