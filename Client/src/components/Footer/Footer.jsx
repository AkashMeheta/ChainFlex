import React from 'react'

const Footer = () => {
    return (
        <>
            <h1 className=' ml-10 text-[3vw]  mt-28'>GET IN TOUCH</h1>
            <div className='flex ml-10 mt-10 mb-10 justify-between'>
                <div className='w-[45%] flex flex-col justify-between'>
                    <div className='text-2xl'>
                        <h2>Instagram</h2>
                        <a href="#">@reallygreatsite</a>
                    </div>
                    <div className='text-2xl'>
                        <h2>Email</h2>
                        <a href="#">hello@reallygreatsite.com</a>
                    </div>
                    <div className='text-2xl'>
                        <h2>Phone</h2>
                        <a href="#">123-456-789</a>
                    </div>
                </div>
                <div className='w-[45%]'>
                    <img className='w-48' src="public/img1.jpg" alt="" />
                </div>
            </div>
        </>

    )
}

export default Footer