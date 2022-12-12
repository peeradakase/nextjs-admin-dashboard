import React from 'react'
import Image from 'next/image'
import zaoOnsen from '../public/images/zaoOnsen.jpeg';
import styles from "../components/EditOnsen.module.css";
import EditorComponent from "../components/Editor";

export default function EditOnsen() {
  return (
    <div>
      <h3>Edit Onsen</h3>
      <Image
        className={`${styles.editOnsenImg}`}
        src={zaoOnsen}
        alt='zao-onsen' />
      <htmlForm>
        Select image to upload:
        <input type="file" name="fileToUpload" id="fileToUpload" />

        <label htmlFor="name">Onsen name</label>
        <input type="text" id="name" name="name" required />

        {/* About */}
        <div>
          <p>
            <label htmlFor="w3review">About</label>
          </p>
          <div className='m-b-50'><EditorComponent /></div>

        </div>

        {/* Price */}
        <div>
          <p>
            <label htmlFor="w3review">Price</label>
          </p>
          <div><EditorComponent /></div>

        </div>

        {/* Policies */}
        <div>
          <p>
            <label htmlFor="w3review">Policies</label>
          </p>
          <div><EditorComponent /></div>

          <input type="submit" value="Submit" />
        </div>
      </htmlForm>
    </div>
  )
}
