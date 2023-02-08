import React from 'react'
import DashBoardCustomer from "../../components/DashBoardCustomer";
import  DashBoardRevenue from "../../components/DashBoardRevenue";
import DashBoardLastSixMonths from "../../components/DashBoardLastSixMonths";
import styles from "../../components/DashBoard.module.css"
import { useState } from "react";
import { useEffect } from 'react';
import { apiUrl, requestHeader } from '../../data/constant.js'
import axios from 'axios';
import earning from '../../public/images/earning.png';
import orders from '../../public/images/orders.png';
import human from '../../public/images/human.png';

export default function DashBoard() {
  const [dashBoardData, setDashBoardData] = useState();

  const getDashBoardData = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/admin/dashboard`, requestHeader)
      setDashBoardData(data)
    } catch (error) {
      console.log(error,'error')
    }
  }

  useEffect(() => {
    //call Ajax
    getDashBoardData();
  }, [])

  return (
    <div className={`${styles.margin0} bg padding-20 `}>
      <h3 className='m-b-20'>Dashboard</h3>
      {dashBoardData && (
        <div>
          <div className='flex'>
            <DashBoardCustomer
              persent={dashBoardData.customers.amount}
              number={dashBoardData.customers.grow}
              title='CUSTOMER'
              img={human}
              link='/admin/clients'
            />
            <DashBoardCustomer
              persent={dashBoardData.orders.amount}
              number={dashBoardData.orders.grow}
              title='ORDERS'
              img={orders}
              link='/admin/orders'
            />
            <DashBoardCustomer
              persent={dashBoardData.total_earning.amount}
              number={dashBoardData.total_earning.grow}
              title='TOTAL EARNINGS'
              img={earning}
              link='/admin/clients'
            />
          </div>
          <div className='flex m-t-15'>
            <DashBoardRevenue
              amount={dashBoardData.total_revenue.amount}
              target={dashBoardData.total_revenue.target}
              week={dashBoardData.total_revenue.week}
              month={dashBoardData.total_revenue.month}
            />
            <DashBoardLastSixMonths
              dashboard={dashBoardData}
            />
          </div>
        </div>
      )}
    </div>
  )
}
