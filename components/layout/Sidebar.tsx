import React from "react";
import styles from "../../styles/globals.module.css";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Verify from "../../public/verified.svg";
import SidebarItem from "../reusable/SidebarItem";
import User from '../../public/user.png'
import Comment from '../../public/comment.png'
import Receipt from '../../public/Receipt.png'
import Bell from '../../public/bell.png'
const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarLogo}>
        <Image src={Logo} alt="Curv" />
      </div>
      <div className={styles.sidebarItem}>
      <SidebarItem icon={Verify} label="Overview"/>
     <SidebarItem icon={User} label="User Management"/>
     <SidebarItem icon={Verify} label="User & Usage Statistics"/>
     <SidebarItem icon={Comment} label="Reporting"/>
     <SidebarItem icon={Receipt} label="Content Management"/>
     <SidebarItem icon={Bell} label="Notifications"/>





      </div>
     
    </div>
  );
};

export default Sidebar;
