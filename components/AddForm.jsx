import React from 'react'
import Image from 'next/image'
import styles from "../components/AddForm.module.css";
import client1 from '../public/images/client1.jpeg';

export default function AddForm() {
  return (
    <div>
      <h2>Add Admin</h2>
      <div>
        <Image
          className={`${styles.clientImage} m-b-10`}
          src={client1}
          alt='clientImage'
        />
      </div>

      {/* HTML Form with Built-in Validation  */}
      <form action="/send-data-here" method="post">

        <label htmlFor="image">Choose image</label>
        <input type="file" id="image" name="image" required />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="roll">Phone Number</label>
        <input
          type="text"
          id="roll"
          name="roll"
          required
          minLength="10"
          maxLength="20"
        />

        <label htmlFor="name">Email</label>
        <input type="text" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="passwords"
          required
          minLength="10"
          maxLength="20"
        />



        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
