import React from "react";
import Image from "next/image";
import styles from "../components/AddForm.module.css";
import client1 from "../public/images/client1.jpeg";
import { useFormik } from "formik";

export default function AddForm(props) {
  const { onFormSubmit } = props;

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

      if (value.password.length < 4) {
        errors.password = true;
      }

      return errors;
    },
    onSubmit: (values, { setErrors }) => {
      onFormSubmit(values, setErrors);
    },
    validateOnChange: false,
  });

  const onAvatarInputChange = (event) => {
    formik.setFieldValue("avatar", event.currentTarget.files[0]);
  };

  return (
    <div>
      <h3 className="b-b-1 m-b-40">Add Admin</h3>
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
              value={formik.values.avatar}
              name="image"
              onChange={onAvatarInputChange}
              required
            />
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

          <button
            type="submit"
            className={`${styles.buttonSize} btn btn-primary m-t-20  button-size bg-button`}
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  );
}
