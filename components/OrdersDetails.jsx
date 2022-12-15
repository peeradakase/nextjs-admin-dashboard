import React from 'react'
import Image from 'next/image'
import osakaOnsen from '../public/images/osakaOnsen.jpeg';


export default function OrdersDetails() {
  return (
    <div>
      <h1 className='b-b-1'>Orders Details</h1>

      <div className="flex">
        <div className="text">
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3 border bg-light">ID</div>
            </div>
            <div className="col-3">
              <div className="p-3 border bg-light">1</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3 border bg-light">Onsen Name</div>
            </div>
            <div className="col-3">
              <div className="p-3 border bg-light">Osaka Onsen</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3 border bg-light">Booking Date</div>
            </div>
            <div className="col-3">
              <div className="p-3 border bg-light">10 Jan 2023</div>
              <div className="p-3 border bg-light">11.00 - 13.00</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3 border bg-light">Adults</div>
            </div>
            <div className="col-3">
              <div className="p-3 border bg-light">2</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3 border bg-light">Children</div>
            </div>
            <div className="col-3">
              <div className="p-3 border bg-light">1</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3 bg-light">Total(HKD)</div>
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
