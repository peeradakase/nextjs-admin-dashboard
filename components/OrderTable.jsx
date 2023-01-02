import React from 'react'
import akiko from '../public/images/akiko.webp'
import Image from 'next/image'
import Link from 'next/link'

export default function OrderTable() {
  return (
    <div>
      <h3>Orders</h3>
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Client Picture</th>
              <th scope="col">Client Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Image
                  className='client-small-img '
                  src={akiko}
                  alt='akiko'
                />
              </td>
              <td>Akiko</td>
              <td>2333-4233</td>
              <td>monney-ns@gmail.com</td>
              <td>paid</td>
              <td>
                <Link href="/admin/clients/1" className='m-b-10 m-r-10 viewLink'>View</Link>
              </td>
            </tr>
          </tbody>


        </table>
      </div>
    </div>
  )
}
