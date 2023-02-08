import React from 'react'
import Link from 'next/link';
import styles from "../components/DashBoardCustomer.module.css";
// import DashBoard from '../pages/admin/DashBoard';
import Image from 'next/image'
import human from '../public/images/human.png';

export default function DashBoardCustomer(props) {
  const { number, persent, title, img, link } = props;

  return (
    <div className='m-r-30'>
      <div className={`${styles.boxCustomer} padding-10 m-b-10`}>
        <div className='flex space-between'>
          <p className='m-r-30 font-thick'>{title}</p>
          <p >^ {number}%</p>
        </div>
        <h6>{persent}</h6>

        <div className='space-between'>
          <Link className='m-r-60'
            href={link}>
            See details
          </Link>
          <div>
            <Image
              className={styles.dashBoardImage}
              src={img}
              alt="human" />
          </div>
        </div>
      </div>
    </div>
  )
}
