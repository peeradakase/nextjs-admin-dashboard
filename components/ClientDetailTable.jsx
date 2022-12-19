import React from 'react'
import styles from "../components/ClientDetail.module.css";


export default function ClientDetailTable() {
  return (
    <div>
      {/* table */}
      <div>
        <table className={`table table-success table-striped ${styles.tableSize}`}>
          <thead>
            <tr>
              <th scope="col">Onsen Name</th>
              <th scope="col">Booking Date</th>
              <th scope="col">Adults</th>
              <th scope="col">Children</th>
              <th scope="col">total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Osashiwa Onsen</td>
              <td>
                <p>10 Jan 2023</p>
                <p>11:00 - 13:00</p>
              </td>
              <td>2</td>
              <td>1</td>
              <td>250</td>
            </tr>
          </tbody>


        </table>
      </div>

    </div>
  )
}
