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
import menuLogo from '../public/images/menuLogo.png';
import Link from 'next/link';


export default function SideBar() {
  return (
    <div className={`${styles.box} ${styles.bgSb}`}>

      <div className={styles.head}>

        <Image
          className={`${styles.logo} m-b-20`}
          src={menuLogo}
          alt="menuLogo" />
        {/* <h6>Admin dashbord</h6> */}
      </div>

      <div className='p-l-10'>
        <div className={`${styles.main} m-b-50`} >
          <h6>Admin dashbord</h6>

          <h6 className='m-t-20'>MAIN</h6>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={home}
              alt="dashboard" />
            <Link href="/admin/dashboard" className='m-b-10 link-style'>Dashboard</Link>
          </div>
        </div>

        <div className={`${styles.lists} m-b-50`} >
          <h6 className='m-b-10'>LISTS</h6>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={users}
              alt="users" />
            <Link href="/admin/clients/" className='m-b-10 link-style'>Users</Link>
          </div>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={onsens}
              alt="onsens" />
            <Link href="/admin/onsens/" className='m-b-10 link-style'>Onsens</Link>
          </div>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={orders}
              alt="orders" />
            <Link href="/admin/orders/" className='m-b-10 link-style'>Orders</Link>
          </div>
        </div>

        <div className="m-b-50">
          <h6 className='m-b-10'>USER INTERFACE</h6>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={profile}
              alt="profile" />
            <Link href="/admin/my/profile/" className='m-b-10 link-style'>Profile</Link>
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
            <Link href="/admin/my/team/" className='m-b-10 link-style'>Admin Lists</Link>
          </div>
          <div className={styles.boxParent}>
            <Image
              className={styles.icons}
              src={addAdmin}
              alt="addAdmin"
            />
            <Link href="/admin/my/team/Add" className='m-b-10 link-style'>Add Admin</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
