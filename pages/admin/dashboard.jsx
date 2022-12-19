import React from 'react'
import DashBoardCustomer from "../../components/DashBoardCustomer";
import  DashBoardRevenue from "../../components/DashBoardRevenue";
import DashBoardLastSixMonths from "../../components/DashBoardLastSixMonths";
import styles from "../../components/DashBoard.module.css"


export default function DashBoard() {
  return (
    <div className={`${styles.margin0} bg padding-20 `}>
      <h3 className='m-b-20'>Dashboard</h3>
      <DashBoardCustomer/>
      <div className='flex'>
        <DashBoardRevenue/>
        <DashBoardLastSixMonths/>
      </div>
    </div>
  )
}
