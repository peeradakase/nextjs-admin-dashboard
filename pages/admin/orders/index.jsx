import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { apiUrl, requestHeader } from '../../../data/constant.js'
import OrderTable from "../../../components/OrderTable";

export default function OrderTablePage() {
  const [orderItem, setOrderItem] = useState();
  const [paginationDate, setPaginationDate] = useState();

  const getOrderData = async (page) => {
    try {
      const { data: { data, pagination } } = await axios.get(`${apiUrl}/api/admin/orders?page=${page}`, requestHeader)
      setOrderItem(data);
      setPaginationDate(pagination);
    } catch (error) {
    }
  }

  const onPageChange = async (pageNumber) => {
    await getOrderData(pageNumber);
  }

  useEffect(() => {
    //call Ajax
    getOrderData(1);
  }, [])

  return (
    <div>
        <OrderTable
          orders={orderItem}
          pagination={paginationDate}
          onPageChange={onPageChange}
          />

    </div>
  )
}
