import React, { Children } from "react";
import styles from "../../styles/globals.module.css";
import Sidebar from "./Sidebar";
interface ILayout {
  children: JSX.Element;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.layoutSidebar}>
        <Sidebar />
      </div>
      <div className={styles.layoutContent}>{children}</div>
    </div>
  );
};

export default Layout;
