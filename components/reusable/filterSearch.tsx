import React from "react";
import styles from "../../styles/globals.module.css";
import DownArrow from "../../public/downArrow.png";
import Image from "next/image";
interface IFilter {
  label: any;
}
const filterSearch: React.FC<IFilter> = ({ label }) => {
  return (
    <div className={styles.filterSearch}>
      <input placeholder={label} />
      <div className={styles.filterArrow}>
          <Image src={DownArrow} alt="filter"/>
      </div>
    </div>
  );
};

export default filterSearch;
