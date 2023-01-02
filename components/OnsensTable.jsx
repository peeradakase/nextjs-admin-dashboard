import React from 'react'
import Image from 'next/image'
// import osakaOnsen from '../public/images/osakaOnsen.jpeg'
import Link from 'next/link';
import Pagination from '../components/Pagination'
import { apiUrl } from '../data/constant.js';


export default function OnsensTable(props) {
  const { onsen, pagination, onPageChange, onOnsenDelete } = props;
  console.log(onsen, ':onsen')

  const pageCount = pagination ? Math.ceil(pagination.total / pagination.limit) : 0;

  const handlePageClick = (event) => {
    const currentPage = event.selected + 1;
    onPageChange(currentPage)
  }

  return (
    <div>
      <h3>Onsens</h3>
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Onsen image</th>
              <th scope="col">ID</th>
              <th scope="col">Onsen name</th>
              <th scope="col">Price(HKD)</th>
              <th scope="col">About</th>
              <th scope="col">Policies</th>
              <th scope="col">Action</th>

            </tr>
          </thead>

          <tbody>
            {onsen && onsen.map(onsenItems => {
              console.log(onsenItems, ':onsenItems')
              return (
                <tr key={onsenItems.id}>
                  <td><img className='client-small-img' src={`${apiUrl}/${onsenItems.images[0].url}`} alt="" /></td>
                  <td>{onsenItems.id}</td>
                  <td>{onsenItems.name}</td>
                  <td>{onsenItems.price}</td>
                  <td>{onsenItems.about}</td>
                  <td>{onsenItems.policy}</td>
                  {/* <td>{onsenItems.action}</td> */}
                  <td>
                    <Link href="/admin/onsens/edit" className='m-b-10 m-r-10 viewLink'>View</Link>
                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        onOnsenDelete(onsenItems.id)
                      }}
                    >Delete
                    </button>
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
