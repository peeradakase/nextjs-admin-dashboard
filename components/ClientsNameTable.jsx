import React from 'react';
import Image from 'next/image';
import akiko from '../public/images/akiko.webp';
import styles from "../components/ClientsNameTable.module.css";
import Link from 'next/link';

export default function ClientsNameTable() {
  return (
    <div>
      <h3>Clients</h3>
      <div>
        <table className='table table-success table-striped'>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Client name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className='flex'>
                  <div>
                    <Image
                      className='m-r-10 client-small-img'
                      src={akiko}
                      alt='akiko'
                    />
                  </div>
                  <p>Akiko</p>
                </div>
              </td>
              <td>2333-4233</td>
              <td>akiko-ka@gmail.com</td>
              <td>
                <Link href="/admin/clients/[1]" className='m-b-10 m-r-10 viewLink'>View</Link>
                <button>Delete</button>
              </td>

            </tr>
          </tbody>


        </table>
      </div>
    </div>
  )
}
