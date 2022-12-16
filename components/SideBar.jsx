import React from 'react'
import Image from 'next/image'
import home from '../public/images/home.png'
import group from '../public/images/group.png'
import users from '../public/images/users.png';
import addAdmin from '../public/images/addAdmin.png';
import manageTeam from '../public/images/manageTeam.png';
import styles from "../components/SideBar.module.css";
import logout from '../public/images/logout.png';
import orders from '../public/images/orders.png';
import profile from '../public/images/profile.png';
import onsens from '../public/images/onsens.png';



export default function SideBar() {
  return (
    <div className={`${styles.box} ${styles.bgSb}`}>

      <div className={styles.head}>
        <h5 className='p-t-20'>ONSEN</h5>
      </div>
      <div className='p-l-10'>
        <div className={`${styles.main} m-b-50`} >
          <h6 className='m-t-20'>MAIN</h6>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={home}
              alt="dashboard" />
            <div>Dashboard</div>
          </div>
        </div>

        <div className={`${styles.lists} m-b-50`} >
          <h6 className='m-b-10'>LISTS</h6>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={users}
              alt="users" />
            <div className='m-b-10'>Users</div>
          </div>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={onsens}
              alt="onsens" />
            <div className='m-b-10'>Onsens</div>
          </div>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={orders}
              alt="orders" />
            <div>Orders</div>
          </div>
        </div>

        <div className="m-b-50">
          <h6 className='m-b-10'>USER INTERFACE</h6>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={profile}
              alt="profile" />
            <div className='m-b-10'>Profile</div>
          </div>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={logout}
              alt="logout" />
            <div>Logout</div>
          </div>
        </div>

        <div>
          <h6>DATA</h6>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={manageTeam}
              alt="manageTeam"
            />
            <div className='m-b-10'>Manage Team</div>
          </div>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={addAdmin}
              alt="addAdmin"
            />
            <div>Add Admin</div>
          </div>
        </div>

      </div>
    </div>
  )
}
