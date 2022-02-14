/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import Close from '../../../public/close.svg';
import Avatar from '../../../public/Avatar.png';
import { UserModal } from '../../../context';

const UserPopup: React.FC = () => {
  const { closeModal, state } = useContext(UserModal);
  const singleUser = state.userData;

  console.log('userPopup>>>', singleUser);

  return (
    <div className={styles?.userPopupWrapper}>
      <div className={styles.userPopup}>
        <div className={styles.closePopup} onClick={closeModal}>
          <Image src={Close} alt="close" />
        </div>
        {singleUser?.map((data: any) => (
          <>          <div className={styles?.userProfile} key={data?._id}>
            <Image src={data?.user?.userProfilePic ? data?.user?.userProfilePic : Avatar} alt="Profle Pic"
              layout='fill'
              className={styles.userProfile}

            />
          </div>
            <div className={styles?.userDetail}>
              <div className={styles.userPersonalDetail}>
                <div className={styles.detailRow1}>
                  <h2>{data?.user?.userProfileName}</h2>
                  <p style={{ color: "#F4E28E", fontWeight: "600" }}>Last Active:{data?.lastSeen?.slice(0, 10)}</p>
                </div>
                <div className={styles.detailRow2}>
                  <p>First Name: <span style={{ fontWeight: "600" }}>{data?.user?.userProfileName}</span></p>
                </div>
                <div className={styles?.detailRow3}>
                  <p>ID: {data?.id}</p>
                  <p>+91 <span>1234697100</span></p>
                </div>
                <div className={styles?.detailRow4}>
                 <p>{data?.email}</p>
                </div>
                <div className={styles.detailRow5}>
                  <h4>Onboarded</h4>
                  <p style={{ color: "#F4E28E", fontWeight: "600" }}>{data?.onBoarded.slice(0,10)}</p>
                </div>
              </div>
            </div>
            <div className={styles.userStatsWrapper}>
              <div className={styles.userStats}>

             
              <div className={styles.userReach}>
                <h4>Reach</h4>
                <h3>{data.seenCount}</h3>
              </div>
              <div className ={styles.userDetailStats}>
           
             <p>Total No. of Posts: <span>{data?.posts}</span></p>
             <p style={{marginTop:"50px"}}>Actions Taken: <span>{data?.actionCount}</span></p>
             <p>Action Ratio: <span>{data?.actionRatio}%</span></p>
             <p style={{marginTop:"50px"}}>  Post Amplified: <span>{data?.amplifyCount}</span></p>
             <p> Amplification Ratio: <span>{data?.amplifyRatio}%</span></p>

              </div>

              </div>
            </div>
          </>

        ))}
      </div>

    </div>
  );
};

export default UserPopup;
