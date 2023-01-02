import react from "react";
import React from "react";
import OnsensTable from "../../../components/OnsensTable";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { apiUrl, requestHeader } from "../../../data/constant";

export default function OnsensTablePage() {
  const [onsenItems, setOnsenItems] = useState();
  const [paginationData, setPaginationDate] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getOnsenData = async (page) => {
    try {
      const {
        data: { data, pagination },
      } = await axios.get(
        `${apiUrl}/api/admin/onsens?page=${page}`,
        requestHeader
      );
      setOnsenItems(data);
      setPaginationDate(pagination);
    } catch (error) {
    }
  };

  const onPageChange = async (pageNumber) => {
    await getOnsenData(pageNumber);
    setCurrentPage(pageNumber);
  };

  const onDeleteItem = async (id) => {
    //send Delete req to Backend Server
    if (window.confirm("Confirm to delete this row") === true) {
      //if yes
      //send Delete req to Backend Server
      try {
        await axios.delete(`${apiUrl}/api/admin/onsens/${id}`);
        alert("Seccess Delete Onsens");
        getOnsenData(currentPage);
      } catch (error) {
        alert("Delete Onsens Error");
      }
    }
  };

  useEffect(() => {
    //call Ajax
    getOnsenData(currentPage);
  }, []);
  return (
    <div>
      <OnsensTable
        onsen={onsenItems}
        pagination={paginationData}
        onPageChange={onPageChange}
        onOnsenDelete={onDeleteItem}
      />
    </div>
  );
}
