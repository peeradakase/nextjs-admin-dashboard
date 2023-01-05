import React from 'react'
import Pagination from '../components/Pagination'
import Link from 'next/link'

export default function OrderTable(props) {
  const { orders, pagination, onPageChange } = props;

  const pageCount = pagination ? Math.ceil(pagination.total / pagination.limit) : 0;

  const handlePageClick = (event) => {
    const currentPage = event.selected + 1;
    onPageChange(currentPage)
  }

  return (
    <div>
      <h3>Orders</h3>
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              {/* <th scope="col">Client Picture</th> */}
              <th scope="col">Onsen Name</th>
              <th scope="col">Client Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.map(orderItem => {
              return (
                <tr key={orderItem.id}>

                  {/* <td>
                    <Image
                      className='client-small-img '
                      src={akiko}
                      alt='akiko'
                    />
                  </td> */}
                  <td>{orderItem.id}</td>
                  <td>{orderItem.onzen.name}</td>
                  <td>{orderItem.user.name}</td>
                  <td>{orderItem.user.phoneNumber}</td>
                  <td>{orderItem.user.email}</td>
                  <td>{orderItem.status}</td>
                  <td>
                    <Link href="/admin/orders/1" className='m-b-10 m-r-10 viewLink'>View</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Pagination
          onPageChange={handlePageClick}
          pageCount={pageCount}
        />
      </div>
    </div>
  )
}
