import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
<div
      className=' flex flex-col md:flex-row justify-between mb-20 md:p-16 items-start   w-9/12 m-auto  md:w-full'
      style={{ minHeight: "30vh" }}>
      <div>
      </div>


      <div
          className=' flex flex-row md:flex-row sm:flex-col items-center '
          style={{ float: "center"}}>
            <p
          className=' text-3xl md:text-xl lg:text-3xl font-extrabold text-center'
          style={{ color: "#4a4a4a" }}>
          Follow us on.
        </p>
          <a href='https://instagram.com/planet_aqua_pool/'>
            <img alt=""
              src='  https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg'
              className='w-16 sociallogo1'
            />
          </a>
          <a href='https://www.facebook.com/Planetaquapool/'>
            <img alt=""
                src='https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg'
                className='w-16 sociallogo1'
              />
          </a>
          <a href='https://www.youtube.com/watch?v=DefOntrIT24'>
            <img alt=""
                src='https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg'
                className='w-16 sociallogo1'
              />
          </a>
        </div>
    </div>


    <div style={{ fontFamily: "Poppins" }} className='mb-4'>
      <div
        className=' w-11/12 m-auto hidden md:block bg-gray-200 '
        style={{ height: "2px" }}
      />
      <div className='flex w-11/12 m-auto  items-center justify-center md:justify-between'>
          <p className='text-xl md:text-xl pt-8  text-gray-400 hover:text-blue-400'>
            Planet Aqua Pool 2023
          </p>
        <span
          className='md:flex hidden items-center pt-8 justify-between'
          style={{ fontFamily: "Poppins" }}>
          <p> Developed By</p>
          <a className='ml-1 text-black hover:text-blue-600' href="https://twitter.com/numan_being"> Numan Ahmed</a>
        </span>
      </div>
    </div>
    </div>

  )
}

export default Footer