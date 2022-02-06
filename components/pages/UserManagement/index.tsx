import React from "react";
import styles from "../../../styles/Home.module.css";
import Layout from "../../layout";
import Search from "../../reusable/search";
import FilterSearch from "../../reusable/filterSearch";
import UserTable from "./userTable";
const index = () => {
  return (
    <Layout>
      <div className={styles.userManagementWrapper}>
        <div className={styles.wrapperHeading}>
          <div className={styles.wrapperHeadingContent}>
            <div className={styles.wrapperHeadingContentLeft}>
              <p style={{ fontSize: "28px" }}>All Users</p>
              <p>Welcome Karl,here the user list displayed below:</p>
            </div>
            <div className={styles.wrapperHeadingContentRight}>
                <Search label="Search user here"/>
                <div className={styles.filterSearchWrapper}>
                <FilterSearch label="Filter 01"/>
                <FilterSearch label="Filter 02"/>
                </div>  
                
            </div>
          </div>
        </div>
        <div className={styles.userTableWrapper}>
          <UserTable/>
        </div>
      </div>
    </Layout>
  );
};

export default index;
