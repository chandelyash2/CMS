import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Vector from "../../public/Vector.png";
interface ITableHeading {
  children: JSX.Element;
  label: string;
  width: string;
}
const UserTableDiv: React.FC<ITableHeading> = ({ label, width, children }) => {
  return (
    <div className={styles.tableWrapper} style={{ width: `${width}` }}>
      <div className={styles.tableHeading} >
        {/* <div className={styles.tableHeading1}> {label}</div> */}
        {label}
        <div
          className={styles.tableHeadingArrow}
          style={{ margin: "0 0 4px 16px" }}>
          <Image src={Vector} alt="vector" />
        </div>

      </div>
      <div className={styles.tableContent}>
        {children}

      </div>
    </div>

  );
};

export default UserTableDiv;
