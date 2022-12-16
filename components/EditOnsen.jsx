import React from 'react'
import Image from 'next/image'
import zaoOnsen from '../public/images/zaoOnsen.jpeg';
import styles from "../components/EditOnsen.module.css";
import EditorComponent from "../components/Editor";

export default function EditOnsen() {
  return (
    <div>
      <h3 className='b-b-1 m-b-40'>Edit Onsen</h3>
      <div className='m-l-60'>
      <Image
        className={`${styles.editOnsenImg}`}
        src={zaoOnsen}
        alt='zao-onsen' />
      <form>
        Select image to upload:
        <input type="file" name="fileToUpload" id="fileToUpload" className='width-100 choose-image' />

        <div className="mb-3 m-r-30">
          <label htmlFor="nameInputName" className="form-label m-r-60 m-t-50 p-r-40">Onsen Name</label>
          <input type="name" className="form-control" id="nameInputName" />
        </div>

        {/* About */}
        <div>
          <p>
              <label className='m-t-30'
            htmlFor="w3review">About</label>
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
              <label className='m-t-50' htmlFor="w3review">Policies</label>
          </p>
          <div><EditorComponent /></div>

            {/* <input className='m-t-50 m-b-60 '
          type="submit" value="Submit" /> */}

            <div className="m-t-30 m-b-60 d-grid gap-2 col-6 mx-auto">
              <button
                className="general-button btn btn-primary mb-3 m-t-30"
                type='submit'
                value="Submit"
                >Send</button>
            </div>
        </div>
      </form>
      </div>
    </div>
  )
}
