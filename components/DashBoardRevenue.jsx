import React from 'react'
import styles from '../components/DashBoardRevenue.module.css'
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';


export default function DashBoardRevenue(props) {
  const { amount, target, week, month } = props;
  const data = [
    {
      value: 60,
    },
    {
      value: 40
    }
  ];
  const COLORS = ['#706b64', '#63504b', '#FFBB28', '#FF8042'];

  return (

    <div className={styles.box} >
      <h6 className='m-l-15 m-t-20 '>Total Revenue</h6>
      <div className='text-center'>
        <div className={styles.boxPieChart}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                data={data}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
      </div>
        <p className={styles.text}>total sale made today</p>
        <h3>{amount}$</h3>
        <p>
          previous transaction(HKD)
        </p>

        {/* /// */}
        <div className={styles.lastPastContainer}>
          <div className="row">
            <div className="col">
              <h6>Target</h6>
              <p>^{target}</p>
            </div>
            <div className="col">
              <h6>Last Week</h6>
              <p>^{week}</p>
            </div>
            <div className="col">
              <h6>Last Month</h6>
              <p>^{month}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
