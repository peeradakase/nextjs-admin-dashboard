import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import ClientDetail from "../../../components/ClientDetail";
import ClientDetailTable from "../../../components/ClientDetailTable";
import { apiUrl } from '../../../data/constant.js'

export default function ClientDetailPage() {
  const router = useRouter();
  const { id } = router.query
  const [client, setClient] = useState(null);

  const getClientDate = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/admin/clients/${id}`);
      console.log(data)
      setClient(data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (id) {
      getClientDate(id);
    }
  }, [id]);

  return (
    <div>
      {client &&
        <ClientDetail
          ClientData={client}
        />
      }
      <ClientDetailTable/>
    </div>
  )
}
