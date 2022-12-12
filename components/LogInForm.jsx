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
          <h1 className="text-center m-b-30">Admin Login</h1>

          <form className="input-htmlForm m-t-30 ">
            <div className="htmlForm-floating mb-3">
              <input
                type="email"
                className="htmlForm-control"
                id="email-input"
                name="email"
                // value={htmlFormik.values.email}
                placeholder="Email"
              // onChange={htmlFormik.handleChange}
              />
              <label htmlFor="email-input">Company Email Address</label>
            </div>
            <div className="htmlForm-floating mb-3">
              <input
                type="password"
                className="htmlForm-control"
                id="password-input"
                name="password"
                // value={htmlFormik.values.password}
                placeholder="Password"
              // onChange={htmlFormik.handleChange}
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
