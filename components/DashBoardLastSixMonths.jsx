import React from "react";
import styles from "../components/DashBoardLastSixMonths.module.css";
import { BarChart, XAxis, YAxis, Cell, Bar, ResponsiveContainer } from 'recharts';

export default function DashBoardLastSixMonths(props) {
  const { dashboard } = props;
  const data = [
    {
      name: 'Jan',
      value: 600,
    },
    {
      name: 'Feb',
      value: 400
    },
    {
      name: 'March',
      value: 600,
    },
    {
      name: 'April',
      value: 400
    },
    {
      name: 'May',
      value: 400
    }
  ];
  const COLORS = ['#cadae1', '#bfd1de', '#a7a3b5', '#9e8c9c'];


  return (
    <div className={`${styles.container} m-l-15`}>
      <h6 className='m-l-15 m-t-20 '>Last 5 months (Revenue)</h6>
      <div className={`${styles.box} m-l-15 m-t-30`}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
