import React from 'react'
import Image from 'next/image'
import styles from "../components/Profile.module.css";
import superAdmin from '../public/images/superAdmin.jpeg';

export default function Profile() {
  return (
    <div>
      <h2>Add Admin</h2>
      <div>
        <Image
          className={`${styles.superAdmin} m-b-10`}
          src={superAdmin}
          alt='superAdmin'
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

          <h1>Role</h1>
          <div>
            <input type="radio" id="admin" name="admin" value="admin" />
            <label htmlFor="html">Admin</label>
            <input type="radio" id="super-admin" name="admin" value="super-admin" />
            <label htmlFor="css">Super Admin</label>
          </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
