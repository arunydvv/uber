import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex items-center justify-center '>
      <div className='bg-black w-full h-full rounded-lg p-8'>
        <img className='w-48 mx-auto' src="https://th.bing.com/th/id/OIP.W4_PdavWQJjv4SRW4UhhawHaHa?rs=1&pid=ImgDetMain" alt="Uber logo" />
        <h2 className='text-3xl text-white font-bold my-4'>Get Started with Uber</h2>
        <button className='bg-white px-8 py-2 rounded-lg font-bold'>Continue</button>
      </div>
    </div>
  )
}

export default Home
