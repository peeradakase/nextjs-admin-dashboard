import React from 'react'
import Link from 'next/link';
import styles from "../components/DashBoardCustomer.module.css";
// import DashBoard from '../pages/admin/DashBoard';
import Image from 'next/image'
import human from '../public/images/human.png';

export default function DashBoardCustomer() {
  return (
    <div>
      <div className={`${styles.boxCustomer} padding-10 m-b-10`}>
        <div className='flex '>
          <p className='m-r-30 font-thick ' >CUSTOMERS</p>
          <p >^30%</p>
        </div>
        <h6>100</h6>

        <div className='flex'>
          <Link className='m-r-60'
            href="/admin/clients/index">
            See details
          </Link>
          <div>
            <Image
              className={styles.dashBoardImage}
              src={human}
              alt="human" />
          </div>
        </div>
      </div>
    </div>
  )
}
