import React from 'react'
import Image from 'next/image'
import styles from './LogInForm.module.css'
import logo from '../public/images/logo.png'

export default function LoginForm() {
  return (
    <div className='background-image'>
      <div className={styles.boxParent}>
        <div className={styles.boxLogin
        }>
          <h3 className="text-center m-b-30">Admin Login</h3>

          <form className="input-form m-t-30 ">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email-input"
                name="email"
                // value={formik.values.email}
                placeholder="Email"
              // onChange={formik.handleChange}
              />
              <label htmlFor="email-input">Company Email Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password-input"
                name="password"
                // value={formik.values.password}
                placeholder="Password"
              // onChange={formik.handleChange}
              />
              <label htmlFor="password-input">Password</label>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="general-button btn btn-primary mb-3 m-t-30"
                type='submit'>Log In</button>
            </div>
          </form>
        </div>
        <div>
          <Image
            src={logo}
            alt="logo" />
        </div>
      </div>
    </div>
  )
}
