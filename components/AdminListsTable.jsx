import React from 'react'
import Link from 'next/link'

export default function AdminListsTable() {
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
              <th scope="col">ID</th>
              <th scope="col">Admin Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>2333-4233</td>
              <td>monney-ns@gmail.com</td>
              <td>admin</td>
              <td><button>Delete</button></td>
            </tr>
          </tbody>


        </table>
      </div>
    </div>
  )
}
