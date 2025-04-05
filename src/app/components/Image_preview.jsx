'use client'
import React from 'react'
import Loading from './Loading'
import { Dai_Banna_SIL } from 'next/font/google'

function Image_preview(props) {
  return (
    <>
      <div className='w-[90%] p-2 sm:p-0 ms-4 sm:ms-0 sm:w-full mt-8 grid grid-cols-1 md:grid-cols-2  gap-4'>
        <div>
          <h2 className='bg-blue-500 p-2 rounded-t-xl flex items-center justify-center text-xl font-medium'>Original Image</h2>
          <div className='h-[27vh] w-full  p-0 outline-0 overflow-hidden bg-gray-500'>
            {props.upload ? <img className='h-full w-full object-cover' src={props.upload} alt="" /> :
              <div className='w-full h-[90%] flex items-center justify-center'>No Image Selected!</div>
            }
          </div>
        </div>
        <div>
          <h2 className='bg-lime-500 p-2 rounded-t-xl flex items-center justify-center text-xl font-medium'>Enhanced Image</h2>
          <div className='h-[27vh] w-full bg-sky-100 overflow-hidden'>
            {props.enhancedImage && !props.loading && (
              <>
                <img className='h-full w-full object-cover' src={props.enhancedImage}></img>
              </>
            )}
            {props.loading ? <Loading></Loading> : (
              <div className='h-[90%] w-full flex items-center justify-center'>No Image Selected!</div>
            )}
          </div>
        </div>
      </div>
      {props.enhancedImage && !props.loading && (
        <div className='w-full flex items-center justify-center mt-8'>
          <a href={props.enhancedImage} download="enhanced-image.jpg" className=" h-[8vh] w-[30%] flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-all text-lg font-semibold  ">Download Image</a>
        </div>
      )}
    </>
  )
}

export default Image_preview
