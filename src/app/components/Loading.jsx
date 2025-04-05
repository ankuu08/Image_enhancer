import React from 'react'

function Loading() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='h-12 w-12 border-t-transparent border-4 border-teal-500 rounded-full animate-spin transition-all'></div>
    </div>
  )
}

export default Loading
