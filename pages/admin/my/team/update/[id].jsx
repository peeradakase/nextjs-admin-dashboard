import React from 'react'
import AddForm from '../../../../../components/AddForm'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { apiUrl, requestHeaderFormData } from '../../../../../data/constant.js';

export default function UpdateAdmin() {
  const router = useRouter();
  const { id } = router.query
  console.log(router.query , 'router.query')
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [admin, setAdmin] = useState(null);

  const getAdminDate = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/admin/teams/${id}`);
      setAdmin(data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if(id) {
      getAdminDate(id);
    }
  }, [id]);

  const onUpdateAdminRequest = async (adminData, isFormData, setErrors) => {
    try {
      setIsFormLoading(true);
      await axios.put(
        `${apiUrl}/api/admin/teams/${id}`,
        adminData,
        isFormData ? requestHeaderFormData : requestHeader
      );
      alert('Success Update Admin');
    } catch (error) {
        alert('Failed to Update Admin')
        if (error.response.data) {
          setErrors(error.response?.data);
        }
        console.log(error.response);
    } finally {
      setIsFormLoading(false);
    }
  }

  const onUpdateAdminFormSubmit = async (formValue, setErrors) => {
    const { avatar, name, email, phoneNumber, role } = formValue;
    // if it has avatar update, then send as form data
    if (avatar) {
      //Send formValue to backend
      //Convert data type
      //from
      //application/json
      //to
      //form-data

      const formData = new FormData();

      formData.append('avatar', avatar);

      if (name) {
        formData.append('name',name);
      }

      if (email) {
        formData.append('email',email);
      }

      if (phoneNumber) {
        formData.append('phoneNumber', phoneNumber)
      }

      if (role) {
        formData.append('role', role);
      }

      await onUpdateAdminRequest(formData, true, setErrors)
    } else {
      // if no avatar updATE, then send as json
      const data = {};

      if (name) {
        data.name = name;
      }

      if (email) {
        data.email = email;
      }

      if (phoneNumber) {
        data.phoneNumber = phoneNumber;
      }

      if (role) {
        data.role = role;
      }

      await onUpdateAdminRequest(data, false, setErrors)
    }
  }

  return (
    <div>
      <h3 className="b-b-1 m-b-40">Update Admin Profile</h3>
      {admin && (
        <AddForm
          mode="update"
          formValue={admin}
          onFormSubmit={onUpdateAdminFormSubmit}
          isLoading={isFormLoading}
        />)}
    </div>
  )
}
