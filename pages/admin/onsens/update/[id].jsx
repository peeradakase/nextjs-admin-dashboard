import React from 'react'
import EditOnsen from '../../../../components/EditOnsen'
import axios from 'axios';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useEffect } from 'react';
import { apiUrl, requestHeaderFormData, requestHeader } from '../../../../data/constant.js';

export default function UpdateOnsens() {
  const router = useRouter();
  const { id } = router.query
  console.log(router.query, 'router.query')
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [onsen, setOnsen] = useState(null);

  const getOnsenDate = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/admin/onsens/${id}`);
      console.log(data,'data')
      setOnsen(data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    console.log(id,'id')
    if (id) {

      getOnsenDate(id);
    }
  }, [id]);

  const onUpdateOnsenRequest = async (onsenData, isFormData, setErrors) => {
    try {
      setIsFormLoading(true);
      await axios.put(
        (`${apiUrl}/api/admin/onsens/${id}`),
        onsenData,
        isFormData ? requestHeaderFormData : requestHeader
      );
      alert('Success Update Onsen');
    } catch (error) {
      alert('Failed to Update Onsen')
      if (error.response?.data) {
        setErrors(error.response?.data);
      }
      console.log(error, ':error')
    } finally {
      setIsFormLoading(false);
    }
  }

  const onUpdateOnsenFormSubmit = async (formValue, setErrors) => {
    const { image, name, deposit, about, price, policy } = formValue;
    // if it has image update, then send as form data
    if (image) {
      //Send formValue to backend
      //Convert data type
      //from
      //application/json
      //to
      //form-data

      const formData = new FormData();

      if (image) {
        formData.append('image', image);
      }

      if (name) {
        formData.append('name', name);
      }

      if (deposit) {
        formData.append('deposit', deposit);
      }

      if (about) {
        formData.append('about', about);
      }

      if (price) {
        formData.append('price', price);
      }

      if (policy) {
        formData.append('policy', policy);
      }

      await onUpdateOnsenRequest
      (formData, true, setErrors)
    } else {
      // if no image update, then send as json

      const data = {};

      if (image) {
        data.name = image;
      }

      if (name) {
        data.name = name;
      }

      if (deposit) {
        data.deposit = deposit;
      }

      if (about) {
        data.about = about;
      }

      if (price) {
        data.price = price;
      }

      if (policy) {
        data.policy = policy;
      }

      await onUpdateOnsenRequest(data, false, setErrors)
    }
  }

  return (
    <div>
      <h3 className="b-b-1 m-b-40">Update Onsen Profile</h3>
      {onsen && (
        <EditOnsen
          mode="update"
          formValue={onsen}
          onFormSubmit={onUpdateOnsenFormSubmit}
          isLoading={isFormLoading}
        />)}
    </div>
  )
}
