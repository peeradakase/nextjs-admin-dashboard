import React from 'react'
import styles from '../components/DashBoardRevenue.module.css'

export default function DashBoardRevenue() {
  return (

    <div className={styles.box} >
      <h6 className='m-l-15 m-t-20 '>Total Revenue</h6>
      <div className='text-center'>
        <p className={`${styles.boxPieChart} m-l-200 m-t-30 `}>pie chart</p>
        <p className={styles.text}>total sale made today</p>
        <h5>80,000 HKD</h5>
        <p>
          previous transaction(HKD)
        </p>

        {/* /// */}
        <div className={styles.lastPastContainer}>
          <div className="row">
            <div className="col">
              <h6>Target</h6>
              <p>^160K</p>
            </div>
            <div className="col">
              <h6>Last Week</h6>
              <p>^40K</p>
            </div>
            <div className="col">
              <h6>Last Month</h6>
              <p>^90K</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
