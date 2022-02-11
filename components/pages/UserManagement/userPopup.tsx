import React, { useContext } from 'react'
import styles from '../../../styles/Home.module.css'
import Image from 'next/image'
import Close from '../../../public/close.svg'
import { UserModal } from '../../../context'
const UserPopup: React.FC = () => {

  const { userData, closeModal, state } = useContext(UserModal)
  console.log("userPopup>>>", state.userData)
  return (
    <div className={styles?.userPopupWrapper}>

      <div className={styles.userPopup}>
        <div className={styles.closePopup} onClick={closeModal}><Image src={Close} alt="close" /></div>
        userPopup</div>
    </div>
  )
}

export default UserPopup