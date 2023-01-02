import React from 'react'
import Link from 'next/link'
import Pagination from '../components/Pagination'
import { apiUrl } from '../data/constant.js';


export default function AdminListsTable(props) {
  const { team, pagination, onPageChange, onTeamDelete } = props;

  const pageCount = pagination ? Math.ceil(pagination.total / pagination.limit) : 0;

  const handlePageClick = (event) => {
    const currentPage = event.selected + 1;
    onPageChange(currentPage)
  }

  return (
    <div>
      <h3>Admin lists</h3>
      <Link href="/admin/my/team/Add" className='m-b-10 m-r-10 viewLink'>
        <button className='float-right m-b-10 button-style '>Add New</button>
      </Link>
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">ID</th>
              <th scope="col">Admin Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {team && team.map(admin => {
              return (
                <tr key={admin.id}>
                  <td><img className='client-small-img' src={`${apiUrl}/${admin.avatar}`} alt="admin-img" /></td>
                  <td>{admin.id}</td>
                  <td>{admin.name}</td>
                  <td>{admin.phoneNumber}</td>
                  <td>{admin.email}</td>
                  <td>{admin.role}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        onTeamDelete(admin.id)
                      }}
                    >
                      Delete
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
