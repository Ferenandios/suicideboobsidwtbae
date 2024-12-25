import { FC } from "react";
import Img from "./Img/Img";
import Title from "./Title/Title";
import styles from "./Service.module.css";
import Link from "next/link";

const Service: FC<{ serviceId: number }> = ({ serviceId }): JSX.Element => {
  return (
    <>
      <Link className={styles.inner} href={`/catalog/${serviceId}`}>
        <Img serivceId={serviceId} />
        <Title serviceId={serviceId} />
      </Link>
    </>
  );
};

export default Service;
