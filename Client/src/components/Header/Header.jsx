import React from 'react'
import {  Navbar } from '../index'

const Header = () => {
  return (
    <>
      <>
        <div className='mt-10 flex flex-row'>
          <div className='w-[19vw]'><h1 className='text-4xl '>ChainFLex</h1></div>
          <div className='text-xl pt-3'>
            <Navbar></Navbar>
          </div>
        </div>
      </>
    </>

  )
}

export default Header