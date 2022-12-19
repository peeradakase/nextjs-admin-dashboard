import React from 'react'
import Image from 'next/image'
import osakaOnsen from '../public/images/osakaOnsen.jpeg'
import Link from 'next/link';

export default function OnsensTable() {
  return (
    <div>
      <h3>Onsens</h3>
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
                <div className='flex'>
                  <p className='m-r-30'>Osaka onsen</p>
                  <Image
                    className='onsens-table-image'
                    src={osakaOnsen}
                    alt='osaka-onsen'
                />
                </div>


              </td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>
                <Link href="/admin/onsens/edit" className='m-b-10 m-r-10 viewLink'>View</Link>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>


        </table>
      </div>
    </div>
  )
}
