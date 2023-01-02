// add admin
import React from 'react';
import AddForm from '../../../../components/AddForm';
import axios from 'axios';
import { apiUrl, requestHeaderFormData } from '../../../../data/constant';
import { useRouter } from 'next/router';

export default function Add() {
  const router = useRouter()
  const onCreateAdminRequest = async (adminData, setErrors) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/admin/teams`, adminData, requestHeaderFormData);
      alert('Success Created Admin');
      router.push('/admin/my/team')
    } catch (error) {
      console.log(error ,':error')
      alert('Failed to Create new admin');
      setErrors(error.response?.data);
    }
  }

  const onCreateAdminFormSubmit = async (formValue, setErrors) => {
    // Send formValue to backend เพื่อที่จะสร้างข้อมูลอันใหม่
    // don't use application/json.
    // but use form-data instend cos we have pics

    const formData = new FormData();

    formData.append('name', formValue.name);
    formData.append('email', formValue.email);
    formData.append('phoneNumber', formValue.phoneNumber);
    formData.append('password',formValue.password);
    formData.append('role', formValue.role);
    formData.append('avatar', formValue.avatar)

    await onCreateAdminRequest(formData, setErrors);
  }

  return (
    <div>
      <AddForm onFormSubmit={onCreateAdminFormSubmit}/>
    </div>
  )
}
