import React from 'react';
// import Image from 'next/image';
// import akiko from '../public/images/akiko.webp';
import styles from "../components/ClientsNameTable.module.css";
import Link from 'next/link';
import Pagination from '../components/Pagination';

export default function ClientsNameTable(props) {
  const { clients, pagination, onPageChange, onClientDelete } = props;

  const pageCount = pagination ? Math.ceil(pagination.total /pagination.limit) : 0;

  const handlePageClick = (event) => {
    const currentPage = event.selected + 1;
    onPageChange(currentPage)
  }

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
            {clients && clients.map(clientsData => {
              return (
                <tr key={clientsData.id}>
                  <td>{clientsData.id}</td>
                  <td>{clientsData.name}</td>
                  <td>{clientsData.phoneNumber}</td>
                  <td>{clientsData.email}</td>
                  <td>
                    <Link href={`/admin/clients/${clientsData.id}`} className='m-b-10 m-r-10 viewLink'>View</Link>
                  </td>
                   {/* {`${apiUrl}/${admin.avatar}`} */}
                </tr>
              )
            })}
          </tbody>
        </table>

        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />



      </div>
    </div>
  )
}
