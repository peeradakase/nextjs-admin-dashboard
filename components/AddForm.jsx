import React from "react";
import Image from "next/image";
import styles from "../components/AddForm.module.css";
import client1 from "../public/images/client1.jpeg";
import { useFormik } from "formik";
import { useState } from "react";
import { useEffect } from 'react';
import { apiUrl } from '../data/constant.js'

export default function AddForm(props) {
  const { onFormSubmit, isLoading, mode, formValue } = props;
  const [avatarUrl, setAvatarUrl] = useState(null);

  const formik = useFormik({
    initialValues: {
      avatar: null,
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      role: "admin",
    },
    validate: (value) => {
      const errors = {};

      if (mode ==='create') {
        if (value.password.length < 4) {
          errors.password = true;
        }
      }

      return errors;
    },
    onSubmit: (values, { setErrors }) => {
      onFormSubmit(values, setErrors);
    },
    validateOnChange: false,
  });

  const previewImage = (file) => {
    if (file) {
      setAvatarUrl(URL.createObjectURL(file));
    }
  }

  const onAvatarInputChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("avatar",file);
    previewImage(file)
  };

  const updateFormValue = (value) => {
    if (!value) {
      return;
    }

    const { avatar, name, email, phoneNumber, password, role } = value;

    if (avatar) {
      const imageUrl = `${apiUrl}/${avatar}`;
      setAvatarUrl(imageUrl);
    }

    if (name) {
      formik.setFieldValue("name",name);
    }

    if (phoneNumber) {
      formik.setFieldValue("phoneNumber", phoneNumber);
    }

    if (email) {
      formik.setFieldValue("email", email);
    }

    if (password) {
      formik.setFieldValue("password", password);
    }

    if (role) {
      formik.setFieldValue("role", role);
    }

  }

  useEffect(() => {
    updateFormValue(formValue);
  },[formValue])

  return (
    <div>
      <div className="flex">
        {/* image
        <div>
          <Image
            className={`${styles.clientImage} m-b-10`}
            src={client1}
            alt='clientImage'
          />
        </div> */}

        {/* HTML Form with Built-in Validation  */}

        <form onSubmit={formik.handleSubmit}
          className={styles.boxForm}>
          <div className="flex">
            <div>
              <div className="mb-3 m-r-30">
                <label
                  htmlFor="nameInputName"
                  className="form-label m-r-60 p-r-40"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInputName"
                  value={formik.values.name}
                  name="name"
                  onChange={formik.handleChange}
                  required
                />
              </div>

              <div className="mb-3 m-r-30">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label m-r-60 p-r-40"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.email && <p>email already existed</p>}
              </div>
            </div>

            <div>
              <div className="mb-3">
                <label
                  htmlFor="phoneNumberInputphoneNumber"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="phoneNumber"
                  className="form-control"
                  id="phoneNumberInputphoneNumber"
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control "
                  id="exampleInputPassword1"
                  value={formik.values.password}
                  name="password"
                  onChange={formik.handleChange}
                  required
                />
                {formik.errors.password && (
                  <p>Password more than 4 charactors</p>
                )}
              </div>
            </div>
          </div>

          {/* img */}
          <div className="mb-3">
            <label
              htmlFor="imageInputImage"
              className="form-label m-r-60 p-r-40"
            >
              Choose image
            </label>
            <input
              type="file"
              className="form-control"
              id="imageInputImage"
              // value={formik.values.avatar}
              // name="image"
              onChange={onAvatarInputChange}

            />

            {avatarUrl && (
              <img src={avatarUrl} alt="avatar" className={`${styles.clientImage} m-b-10`} />
            )}
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="flexRadioDefault1"
              value="superAdmin"
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Super Admin
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="flexRadioDefault2"
              value="admin"
              onChange={formik.handleChange}
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Admin
            </label>
          </div>

          <div>
            {isLoading ? (
              'Loading'
              ) : (
                <button
                  type="submit"
                  className={`${styles.buttonSize} btn btn-primary m-t-20  button-size bg-button`}
                >Submit
                </button>
              )}
          </div>
        </form>
      </div>

    </div>
  );
}
