import { FC } from "react";
import styles from "./Crumb.module.css";
import { ICrumb } from "../../../../../../types/types";
import Link from "next/link";

const Crumb: FC<{ crumb: ICrumb }> = ({ crumb }): JSX.Element => {
  return (
    <div className={styles.ansoc}>
      <Link className={styles.link} href={crumb.link}>
        {crumb.text}
      </Link>
    </div>
  );
};

export default Crumb;
