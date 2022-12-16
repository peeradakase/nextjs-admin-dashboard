import React from 'react'
import Link from 'next/link';
import styles from "../components/DashBoardCustomer.module.css";

export default function DashBoardCustomer() {
  return (
    <div>
      <div className={styles.boxCustomer}>
        <p>CUSTOMERS</p>
        <p>^30%</p>
        <h6>100</h6>
        <Link href="/admin/clients/index">
          See details
        </Link>
      </div>
    </div>
  )
}
