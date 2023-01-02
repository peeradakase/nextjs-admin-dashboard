import React from 'react';
import AdminListsTable from '../../../../components/AdminListsTable';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { apiUrl, requestHeader } from '../../../../data/constant';

export default function AdminLists() {
  const [admins, setAdmins] = useState();
  const [paginationDate, setPaginationDate] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getTeamData = async (page) => {
    try {
      console.log(requestHeader, 'requestHeader')
      const { data: { data, pagination } } = await axios.get(`${apiUrl}/api/admin/teams?page=${page}`, requestHeader)
      setAdmins(data);
      console.log(data, "Mo")
      setPaginationDate(pagination);
    } catch (error) {
      console.log(error);
    }
  }

  const onPageChange = async (pageNumber) => {
    await getTeamData(pageNumber);
    setCurrentPage(pageNumber)
  }

  const onDeleteItem = async (id) => {
    // Send Delete Req to Backend Server
    if (window.confirm('Confirm to delete this row?') === true) {
      // if yes,then send Delete Req to Backend Server

      try {
        await axios.delete(`${apiUrl}/api/admin/teams/${id}`);
        alert('Success Delete Team')
        getTeamData(currentPage)
      } catch (error) {
        alert('Delete Team Error')
        console.log(error, ':error')
      }
    }
  }


  useEffect(() => {
    //call Ajax
    getTeamData(1);
  }, [])

  return (
    <div>
      <AdminListsTable
        team={admins}
        pagination={paginationDate}
        onPageChange={onPageChange}
        onTeamDelete={onDeleteItem}
      />

    </div>
  )
}
