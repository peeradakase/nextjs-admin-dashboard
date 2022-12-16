import React from 'react'
import Image from 'next/image'
import osakaOnsen from '../public/images/osakaOnsen.jpeg';
import styles from "../components/OrdersDetails.module.css";

export default function OrdersDetails() {
  return (
    <div>
      <h3 className='b-b-1'>Orders Details</h3>

      <div className={`${styles.space} flex`}>
        <div className={styles.textBox}>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3  bg-light bold-letter">ID</div>
            </div>
            <div className="col-3">
              <div className="p-3  bg-light">1</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3  bg-light bold-letter">Onsen Name</div>
            </div>
            <div className="col-3">
              <div className="p-3  bg-light">Osaka Onsen</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3  bg-light bold-letter">Booking Date</div>
            </div>
            <div className="col-3">
              <div className="p-3  bg-light">10 Jan 2023</div>
              <div className="p-3  bg-light">11.00 - 13.00</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3  bg-light bold-letter">Adults</div>
            </div>
            <div className="col-3">
              <div className="p-3  bg-light">2</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3  bg-light bold-letter">Children</div>
            </div>
            <div className="col-3">
              <div className="p-3  bg-light">1</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3 bg-light bold-letter">Total(HKD)</div>
            </div>
            <div className="col-3">
              <div className="p-3  bg-light">250</div>
            </div>
          </div>
        </div>

        {/* image */}
        <div>
          <Image className="image-size"
            src={osakaOnsen}
            alt="osaka-onsen"
          />

        </div>

      </div>



    </div>
  )
}
