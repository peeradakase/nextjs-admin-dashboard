import React from 'react'
import ClientsNameTable from "../../../components/ClientsNameTable";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from 'react';
import { apiUrl, requestHeader } from '../../../data/constant'

export default function ClientsPage() {
  const [clientsData, setClientsData] = useState();
  const [paginationDate, setPaginationDate] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getClientData = async (page) => {
    try {
      const { data: { data, pagination } } = await axios.get(`${apiUrl}/api/admin/clients?page=${page}`, requestHeader)
      setClientsData(data)
      setPaginationDate(pagination)
    } catch (error) {

    }
  }

  const onPageChange = async (pageNumber) => {
    await getClientData(pageNumber);
    setCurrentPage(pageNumber);
  }


  useEffect(() => {
    //call Ajax
    getClientData(currentPage);
  }, [])

  return (
    <div><ClientsNameTable
      clients={clientsData}
      pagination={paginationDate}
      onPageChange={onPageChange}
    /></div>
  )
}
