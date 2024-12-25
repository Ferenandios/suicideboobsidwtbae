"use client";

import { FC } from "react";
import { useAppSelector } from "../../hooks";
import Crumb from "./Crumb/Crumb";
import styles from "./Crumbs.module.css";

const Crumbs: FC = (): JSX.Element => {
  const { crumbs } = useAppSelector((state) => state.global);
  return (
    <>
      <section className={styles.section}>
        <div className="container mx-auto">
          <div className={styles.inner}>
            {crumbs.map((crumb) => (
              <Crumb key={crumb.id} crumb={crumb} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Crumbs;
