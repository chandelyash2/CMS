import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Vector from "../../public/Vector.png";
interface ITableHeading {
  label: string;
  width: string;
}
const UserTableDiv: React.FC<ITableHeading> = ({ label, width }) => {
  return (
    <div className={styles.tableHeading} style={{ width: `${width}` }}>
      <div className={styles.tableHeading1}> {label}</div>
      <div
        className={styles.tableHeadingArrow}
        style={{ margin: "0 0 4px 6px" }}
      >
        <Image src={Vector} alt="vector" />
      </div>
    </div>
  );
};

export default UserTableDiv;
