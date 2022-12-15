import React from 'react'
import Link from 'next/link';


export default function DashBoardCustomer() {
  return (
    <div>
      <div>
        <p>CUSTOMERS</p>
        <p>^30%</p>
        <h6>100</h6>
        <Link href="/clients/index">
          See details
        </Link>
      </div>
    </div>
  )
}
