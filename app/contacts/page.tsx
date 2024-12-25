import ContactsPage from "@/components/ContactsPage/ContactsPage";
import { companyNameType } from "@/types/types";
import { Metadata } from "next";

const companyName: companyNameType = "ООО «РЕМИКС»";

export const metadata: Metadata = {
  title: `Контакты - ${companyName}`,
  description: `${companyName} - широкий спектр услуг в Нижневартовске. Надежность, профессионализм, качество. Цены от 5 000 руб. Встречайте 2024 ${
    new Date().getFullYear
  } год с нами!`,
  keywords:
    "ремикс в нижневартовске, ооо ремикс нижневартовск, услуги ремикс, ремикс нв, контакты ремикс, каталог, индустриальная 14 стр 13, remiksnv@yandex.ru, remiksnv, remiks86",
};

const page = () => {
  return (
    <>
      <ContactsPage />
    </>
  );
};

export default page;
