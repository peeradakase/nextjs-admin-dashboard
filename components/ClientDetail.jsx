import React from 'react'
import styles from '../components/ClientDetail.module.css'
import Image from 'next/image'
import akiko from '../public/images/akiko.webp'

export default function ClientDetail() {
  return (
    <div>
      <div className='flex m-b-10'>
        <Image className={styles.imgSize}
          src={akiko}
          alt="clientDetail-picture" />
        <h4 className={styles.text}>Akiki Karashiwa</h4>
      </div>
      <div className={`${styles.space} flex b-t-1`}>
        <div className={styles.textBox}>
          <div className="row g-2">
            <div className="col-3 height-96">
              <div className="p-3  bg-light bold-letter ">Phone Number</div>
            </div>
            <div className="col-3">
              <div className="p-3  bg-light">3988-2998</div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-3">
              <div className="p-3  bg-light bold-letter">Email address</div>
            </div>
            <div className="col-3 width-180">
              <div className="p-3  bg-light">lopp11@gmail.com</div>
            </div>
          </div>
        </div>
      </div>


    </div>



  )
}
