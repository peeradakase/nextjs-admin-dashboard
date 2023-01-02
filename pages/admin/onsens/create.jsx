import React from 'react'
import EditOnsen from '../../../components/EditOnsen'
import { useRouter } from 'next/router';
import axios from 'axios';
import { apiUrl, requestHeaderFormData } from '../../../data/constant.js';

export default function CreateOnsenPage() {
  const router = useRouter()
  const onCreateOnsenRequest = async (onsenData, setErrors) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/admin/onsens`, onsenData, requestHeaderFormData);
      alert('Success Created Onsen')
      router.push('/admin/onsens');
    } catch (error) {
      alert('Failed to Create new Onsen');
      setErrors(error.response?.data);
    }
  }

  const onCreateOnsens = async (formValue, setErrors) => {
    // Send formValue to backend เพื่อที่จะสร้างข้อมูลอันใหม่
    // don't use application/json.
    // but use form-data instend cos we have pics

    const formData = new FormData();

    formData.append('image', formValue.image);
    formData.append('name', formValue.name);
    formData.append('about', formValue.about);
    formData.append('price', formValue.price);
    formData.append('policy', formValue.policy);
    formData.append('deposit', formValue.deposit);


    await onCreateOnsenRequest(formData, setErrors);
  }
  return (
    <div><EditOnsen onFormSubmit={onCreateOnsens}/></div>
  )
}
