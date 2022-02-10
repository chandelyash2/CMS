import React from "react";
import styles from "../../../styles/Home.module.css";
import UserTableDiv from "../../reusable/userTableDiv";
import { useQuery } from "@apollo/client";
import { getData } from '../../../graphql-documents/getUserData'
import Image from 'next/image'
import User from '../../../public/user.png'
import { url } from "inspector";
const UserTable = () => {
  const { data, loading, error, refetch, fetchMore, networkStatus } = useQuery(
    getData,
    {
      variables: {
        offset: 0,
        limit: 2,
      },
      fetchPolicy: "cache-first", // Used for first execution
    }
  );
  // console.log(, "homeData")
  const userData = data?.getAllAdminUsers?.data
  console.log(userData, "userData")

  return (
    <div className={styles.userTable}>
      <div className={styles.TableWrapper}>
        <div className={styles.tableHeadingWrapper}>
      
              <UserTableDiv label="UserID" width="185px" >
                {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.id}</ul>
                    
                  </li>
                  ))
                }
              

              </UserTableDiv>
              <UserTableDiv label="User Profile Name" width="305px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>

                    <ul><span className={styles.avatar}><a href={d?.user?.userProfilePic?d?.user?.userProfilePic:User}/></span>{d?.user?.userProfileName}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Email" width="185px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.email}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Onboarded" width="155px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.onBoarded?.slice(0,10)}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Last Active  " width="155px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.lastSeen?d.lastSeen.slice(0,10):""}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Posts" width="85px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.posts}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Actions Taken" width="145px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.actionCount}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Action Ratio" width="145px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.actionRatio}%</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Amplified" width="105px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.amplifyCount}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Amplify Ratio" width="145px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.amplifyRatio}%</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Account Status" width="145px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.accountStatus?d?.accountStatus:"Active"}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
              <UserTableDiv label="Marks" width="125px" >
              {
                  userData?.map((d:any)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li className={styles.tableList}>
                    <ul>{d?.accountStatus?d?.accountStatus:"Active"}</ul>
                    
                  </li>
                  ))
                }
              </UserTableDiv>
           
        </div>
      </div>
    </div>
  );
};

export default UserTable;
