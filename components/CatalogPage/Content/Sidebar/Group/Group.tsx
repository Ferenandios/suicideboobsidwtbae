import { FC } from "react";
import { type IService } from "../../../../../types/types";
import styles from "./Group.module.css";
import Link from "next/link";
import { useAppSelector } from "@/hooks";

const Group: FC<{ service: IService }> = ({ service }): JSX.Element => {
  const { currentService, colorTheme } = useAppSelector(
    (state) => state.global
  );
  const isActive: boolean = currentService.id === service.id;
  return (
    <>
      <Link
        href={`/catalog/${service.id}`}
        // style={({ isActive }) => ({
        //   backgroundColor: isActive ? colorTheme : "",
        //   color: isActive ? "white" : "",
        // })}
        style={{
          backgroundColor: isActive ? colorTheme : "",
          color: isActive ? "white" : "",
        }}
        className={styles.button}
      >
        <h3 className={styles.title}>{service.title}</h3>
      </Link>
    </>
  );
};

export default Group;
