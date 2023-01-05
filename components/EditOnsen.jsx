import React from "react";
import Image from "next/image";
import zaoOnsen from "../public/images/zaoOnsen.jpeg";
import styles from "../components/EditOnsen.module.css";
import EditorComponent from "../components/Editor";
import { useFormik } from "formik";
import { useState } from "react";
import { useEffect } from 'react';
import { apiUrl } from '../data/constant.js'

export default function EditOnsen(props) {
  const { onFormSubmit, isLoading, mode, formValue } = props;
  const [imageUrl, setImageUrl] = useState(null);

  const formik = useFormik({
    initialValues: {
      image: null,
      deposit: 100,
      name: "",
      about: "",
      price: "",
      policy: "",
    },
    onSubmit: (values, { setErrors }) => {
      onFormSubmit(values, setErrors)
    },
    validateOnChange: false,
  });

  const previewImage = (file) => {
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  }

  const onImageInputChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("image", file);
    previewImage(file)
  };

  // const onImageInputChange = (event) => {
  //   formik.setFieldValue('image', event.currentTarget.files[0]);
  // }

  const onAboutChange = (value) => {
    formik.setFieldValue("about", value);
  };

  const onPriceChange = (value) => {
    formik.setFieldValue("price", value);
  };

  const onPoliciesChange = (value) => {
    formik.setFieldValue("policy", value);
  };

  const updateFormValue = (value) => {
    if (!value) {
      return;
    }

    const { images, name, deposit, about, price, policy } = value;

    if (images) {
      const imageUrl = `${apiUrl}/${images[0].url}`;
      setImageUrl(imageUrl);
    }

    if (name) {
      formik.setFieldValue("name", name);
    }

    if (deposit) {
      formik.setFieldValue("deposit", deposit);
    }

    if (about) {
      formik.setFieldValue("about", about);
    }

    if (price) {
      onPriceChange(price)
    }

    if (policy) {
      onPoliciesChange(policy);
    }

  }

  useEffect(() => {
    console.log(formValue, 'formValue')
    updateFormValue(formValue);
  }, [formValue])

  return (
    <div>
      {/* <h3 className="b-b-1 m-b-40">Edit Onsen</h3> */}
      <div className="m-l-60">

        {/* <Image
          className={`${styles.editOnsenImg}`}
          src={zaoOnsen}
          alt="zao-onsen"
        /> */}

        <form onSubmit={formik.handleSubmit}>
          {/* Select image to upload: */}
          {/* <input
            type="file"
            name="fileToUpload"
            id="fileToUpload"
            className="width-100 choose-image"
          /> */}

          {/* image */}
          <div className="mb-3 m-r-30 width-40">
            <label
              htmlFor="depositInputDeposit"
              className="form-label m-r-60 m-t-50 p-r-40 "
            >
              Onsen Picture
            </label>
            <input
              type="file"
              className="form-control"
              id="depositInputDeposit"
              onChange={onImageInputChange}
            />

            {imageUrl && (
              <img src={imageUrl} alt="image" className={`${styles.clientImage} m-b-10`} />
            )}
          </div>

          {/* Onsen Name */}
          <div className="mb-3 m-r-30 width-40">
            <label
              htmlFor="nameInputName"
              className="form-label m-r-60 m-t-50 p-r-40 "
            >
              Onsen Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInputName"
              value={formik.values.name}
              onChange={formik.handleChange}
              name='name'
            />
          </div>

          {/* deposit */}
          <div className="mb-3 m-r-30 width-40">
            <label
              htmlFor="depositInputDeposit"
              className="form-label m-r-60 m-t-50 p-r-40 "
            >
              Deposit
            </label>
            <input
              type="number"
              className="form-control"
              id="depositInputDeposit"
              value={formik.values.deposit}
              onChange={formik.handleChange}
              name='deposit'
            />
          </div>
          {/* About */}
          <div>
            <p>
              <label className="m-t-30" htmlFor="w3review">
                About
              </label>
            </p>
            <div className="m-b-50">
              <EditorComponent
                editOnsen={formik.values.about}
                onChange={onAboutChange}
              />
            </div>
          </div>
          {/* Price */}
          <div>
            <p>
              <label htmlFor="w3review">Price</label>
            </p>
            <div>
              <EditorComponent
                editOnsen={formik.values.price}
                onChange={onPriceChange}
              />
            </div>
          </div>
          {/* Policies */}
          <div>
            <p>
              <label className="m-t-50" htmlFor="w3review">
                Policies
              </label>
            </p>
            <div>
              <EditorComponent
                editOnsen={formik.values.policy}
                onChange={onPoliciesChange}
              />
            </div>

            {/* <input className='m-t-50 m-b-60 '
          type="submit" value="Submit" /> */}

            <div className="m-t-30 m-b-60 d-grid gap-2 col-6 mx-auto float-left">
              {isLoading ? (
                'Loading'
              ) : (
                <button
                  className="general-button btn btn-primary mb-3 m-t-30  m-l-200"
                  type="submit"
                  value="Submit"
                >
                  Send
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
