import React from "react";
import styles from "../../styles/globals.module.css";
import searchIcon from "../../public/serachIcon.png";
import Image from "next/image";
interface ISearch {
  label: any;
}
const search: React.FC<ISearch> = ({ label }) => {
  return (
    <div className={styles.search}>
      <input placeholder={label} />
      <div className={styles.searchImage}>
      <Image src={searchIcon} alt="search"/>

      </div>
    </div>
  );
};

export default search;
