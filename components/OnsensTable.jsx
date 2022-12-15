import React from 'react'
import Image from 'next/image'
import osakaOnsen from '../public/images/osakaOnsen.jpeg'

export default function OnsensTable() {
  return (
    <div>
      <h1>Orders</h1>
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Onsen name</th>
              <th scope="col">Price(HKD)</th>
              <th scope="col">About</th>
              <th scope="col">Policies</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Image
                  className='table-image'
                  src={osakaOnsen}
                  alt='osaka-onsen'
                />
                <p>Osaka onsen</p>
              </td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>
                <button>View</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>


        </table>
      </div>
    </div>
  )
}
