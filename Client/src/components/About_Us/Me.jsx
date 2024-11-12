import React from 'react'

const Me = () => {
    return (
        <>
            <div className='ml-10'>
                <div className='flex justify-between'>
                    <div className=' w-[35%] flex flex-col gap-4 p-4'>
                        <img className='rounded-full w-32 h-32' src="/img1.jpg" alt="" />
                        <h1 className='font-bold text-2xl'>Akash Meheta</h1>
                        <p className='font-semibold text-xl'>I work primarily in digital formats, delivering high quality editorial illustrations and brand assets.</p>
                    </div>
                    <div className=' w-[60%] flex flex-col gap-4 p-4'>
                        <img className='rounded-full w-32 h-32' src="/img1.jpg" alt="" />
                        <h1 className='font-bold text-2xl'>Arpan Dutta</h1>
                        <p className='font-semibold text-xl w-[60%]'>I work primarily in digital formats, delivering high quality editorial illustrations and brand assets.</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className=' w-[60%] flex flex-col items-center gap-4 p-4'>
                        <img className='rounded-full w-32 h-32' src="/img1.jpg" alt="" />
                        <h1 className='font-bold text-2xl'>Aritra Modok</h1>
                        <p className='font-semibold text-xl w-[60%]'>I work primarily in digital formats, delivering high quality editorial illustrations and brand assets.</p>
                    </div>
                    <div className=' w-[35%] flex flex-col gap-4 p-4'>
                        <img className='rounded-full w-32 h-32' src="/img1.jpg" alt="" />
                        <h1 className='font-bold text-2xl'>Sachin Prasad</h1>
                        <p className='font-semibold text-xl'>I work primarily in digital formats, delivering high quality editorial illustrations and brand assets.</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Me