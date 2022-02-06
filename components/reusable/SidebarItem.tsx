import React from "react";
import styles from "../../styles/globals.module.css";
import Image from "next/image";
import Vector from "../../public/Vector.png";
interface ISidebarItem {
  icon: any;
  label: String;
}
const SidebarItem: React.FC<ISidebarItem> = ({ icon, label }) => {
  return (
    <div className={styles.sidebarItemWrapper}>
      <div className={styles.itemContent}>
        <div className={styles.itemLabel}>
          <Image className={styles.labelImage} src={icon} alt="label" width="22px" height='22px' />
          <span className={styles.labelCaption} >{label}</span>
        </div>
        <div className={styles.vectorLogo}>
          <Image src={Vector} alt="vector" />
        </div>
      </div>
    </div>

    
  );
};

export default SidebarItem;
