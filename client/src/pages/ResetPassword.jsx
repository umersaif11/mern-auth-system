import React from 'react'
import { assets } from '../assets/assets'

const ResetPassword = () => {
  return (
    <div
    className='flex justify-center items-center min-h-screen
    text-white bg-linear-to-br from-blue-200 to-purple-400'>
        <img
        onClick={() => navigate('/')} 
        src={assets.logo} alt="" className='absolute left-5 sm:left-20
        top-5 w-28 sm:w-32 cursor-pointer'/>
    </div>
  )
}

export default ResetPassword