import Content from "@/components/PageNotFound/Content/Content";
import { companyNameType } from "@/types/types";
import { FC } from "react";

export async function generateMetadata() {
  const companyName: companyNameType = "ООО «РЕМИКС»";
  return {
    title: `Страница не найдена - ${companyName}`,
  };
}

const PageNotFound: FC = (): JSX.Element => {
  return (
    <>
      <Content />
    </>
  );
};

export default PageNotFound;
