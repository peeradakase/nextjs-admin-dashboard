import React from 'react'
import Image from 'next/image'
import styles from "../components/AddForm.module.css";
import client1 from '../public/images/client1.jpeg';

export default function AddForm() {
  return (
    <div>
      <h3 className='b-b-1 m-b-40'>Add Admin</h3>
      <div className='flex'>
        {/* image */}
        <div>
          <Image
            className={`${styles.clientImage} m-b-10`}
            src={client1}
            alt='clientImage'
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

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control " id="exampleInputPassword1" />
              </div>
            </div>
            {/* <div className="mb-3 form-check">
            <input type="radio" className="form-check-input" id="exampleCheck1" name="radio" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>

            <input type="radio" className="form-check-input" id="exampleCheck1" name="radio" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div> */}
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1" >
              Super Admin
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="flexRadioDefault2">
              Admin
            </label>
          </div>

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
