'use client'
import React, { useState } from 'react'
import Header from './Header'
import Upload_image from './Upload_image'
import Image_preview from './Image_preview'
import { enhancedImageApi } from '../utils/enhancedImageApi'
function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const uploadImagehandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedurl = await enhancedImageApi(file);
      setenhancedImage(enhancedurl.image);
      setLoading(false);
    } catch (error) {
      console.log("Erroe while processing the Image.Please try again later!");
    }
  }
  return (
    <div className='w-full h-[115vh] px-3 py-1 sm:h-[96vh] bg-black flex justify-center items-center'>
      <div>
        <Header></Header>
        <Upload_image uploadImagehandler={uploadImagehandler} setLoading={setLoading} ></Upload_image>
        <Image_preview upload={uploadImage} enhancedImage={enhancedImage} loading={loading}></Image_preview>
      </div>
    </div>
  )
}

export default Home
