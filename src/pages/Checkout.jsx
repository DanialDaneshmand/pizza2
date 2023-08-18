import React from 'react'
import HeaderTitle from '../components/UI/HeaderTitle'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <section >
      <HeaderTitle title='Checkout'/>
      <div className='flex justify-center mt-32'>
      <div className='w-7/12'>
        <div >
          <p className='text-lg font-bold'>Shipping address</p>
        </div>
        <div className='w-full'>
          <input className='border-b border-gray-400 w-full my-4 py-2 outline-none' type="text" placeholder='Enter your name'  />
          <input className='border-b border-gray-400 w-full my-4 py-2 outline-none' type="text" placeholder='Enter your email'  />
          <input className='border-b border-gray-400 w-full my-4 py-2 outline-none' type="text" placeholder='Phone number'  />
          <input className='border-b border-gray-400 w-full my-4 py-2 outline-none' type="text" placeholder='Country'  />
          <input className='border-b border-gray-400 w-full my-4 py-2 outline-none' type="text" placeholder='City'  />
          <button className='border-orange-600 bg-orange-600 mt-8 mb-32 py-2 px-4 rounded text-white'><Link to='/payment'>Payment</Link></button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Checkout