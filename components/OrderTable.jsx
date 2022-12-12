import React from 'react'
import akiko from '../public/images/akiko.webp'
import Image from 'next/image'

export default function OrderTable() {
  return (
    <div>
      <h1>Orders</h1>
      <div>
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Client name</th>
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
                  className='table-image'
                  src={akiko}
                  alt='akiko'
                />
                <p>Akiko</p>
              </td>
              <td>2333-4233</td>
              <td>monney-ns@gmail.com</td>
              <td>paid</td>
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
