import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import Form from "../../../../../Form/Form";
import styles from "./Image.module.css";
import Image from "next/image";

const Img: FC = (): JSX.Element => {
  const { currentService } = useAppSelector((state) => state.global);
  const src = currentService.image;
  return (
    <>
      <div className={styles.inner}>
        {src && <Image className={styles.img} src={src} alt="Service Image" />}
        <div className={styles.ansoc}>
          <div className="flex xl:hidden">
            <Form layout="hidden" />
          </div>
          <div className="hidden xl:flex">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Img;
