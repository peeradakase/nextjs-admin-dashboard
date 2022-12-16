import React from 'react'
import Image from 'next/image'
import styles from "../components/Profile.module.css";
import superAdmin from '../public/images/superAdmin.jpeg';

export default function Profile() {
  return (
    <div>
      <h2 className='b-b-1'>Profile</h2>
      <div className='flex'>
        {/* image */}
        <div>
          <Image
            className={`${styles.superAdmin} m-b-10`}
            src={superAdmin}
            alt='superAdmin'
          />
        </div>

        {/* HTML Form with Built-in Validation  */}

        <form className={styles.boxForm}>
          <div className='flex'>
            <div>
              <div className="mb-3 m-r-30">
                <label htmlFor="nameInputName" className="form-label m-r-60 p-r-40">Name</label>
                <input type="name" className="form-control" id="nameInputName" />
              </div>

              <div className="mb-3 m-r-30">
                <label htmlFor="exampleInputEmail1" className="form-label m-r-60 p-r-40">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" />
              </div>
            </div>

            <div>
              <div className="mb-3">
                <label htmlFor="phoneNumberInputphoneNumber" className="form-label">Phone Number</label>
                <input type="phoneNumber" className="form-control" id="phoneNumberInputphoneNumber" />
              </div>


            </div>

          </div>
          <p>Row: Super Admin</p>

          <button type="submit" className="btn btn-primary m-t-20 ">Submit</button>

        </form>




      </div>
      <div className={`${styles.chooseImage} p-r-80`}>
        <label htmlFor="image">Choose image</label>
        <input type="file" id="image" name="image" required />
      </div>
    </div>
  )
}
