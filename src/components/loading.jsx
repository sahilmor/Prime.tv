import React from 'react'
import loader from './templates/images/loader.gif'

const loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
        <img src={loader} alt="" />
    </div>
  )
}

export default loading