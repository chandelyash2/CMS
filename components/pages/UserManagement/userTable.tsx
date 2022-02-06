import React from "react";
import styles from "../../../styles/Home.module.css";
import UserTableDiv from "../../reusable/userTableDiv";
const UserTable = () => {
  return (
    <div className={styles.userTable}>
      <div className={styles.TableWrapper}>
        <div className={styles.tableHeadingWrapper}>
          <UserTableDiv label="UserID" width="75px" />
          <UserTableDiv label="User Profile Name" width="155px" />
          <UserTableDiv label="Email" width="165px" />
          <UserTableDiv label="Onboarded" width="95px" />
          <UserTableDiv label="Last Active  " width="95px" />
          <UserTableDiv label="Posts" width="65px" />
          <UserTableDiv label="Actions Taken" width="65px" />
          <UserTableDiv label="Action Ratio" width="65px" />
          <UserTableDiv label="Amplified" width="65px" />
          <UserTableDiv label="Amplify Ratio" width="65px" />
          <UserTableDiv label="Account Status" width="105px" />
          <UserTableDiv label="Marks" width="105px" />

        </div>
        Table
      </div>
    </div>
  );
};

export default UserTable;
