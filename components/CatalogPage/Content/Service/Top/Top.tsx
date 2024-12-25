import { FC } from "react";
import Title from "./Title/Title";
import Img from "./Img/Img";
import styles from "./Top.module.css";

const Top: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Img />
        <Title />
      </div>
    </>
  );
};

export default Top;
