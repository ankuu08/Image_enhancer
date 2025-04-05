'use client'
import React from 'react'

function Upload_image(props) {
  const setImagehandler = (e) => {
    props.uploadImagehandler(e.target.files[0]);
    props.setLoading(true);
  }
  return (
    <div className='bg-white mt-5 w-full p-2  rounded-2xl shadow-xl shadow-yellow-700'>
      <div className='h-full w-full rounded-2xl border-3 border-dashed border-gray-500  p-5 flex items-center justify-center text-2xl font-semibold hover:border-cyan-400 hover:border-[0.2rem]'>
        <label htmlFor="file-in">Upload Photo</label>
        <input className='w-full h-full hidden' type="file" name="" id="file-in" onChange={(e) => {
          setImagehandler(e);
        }} />
      </div>
    </div>
  )
}

export default Upload_image
