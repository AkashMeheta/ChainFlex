import React from 'react'
import  Me  from "./Me"
import "../../index.css";


const Us = () => {
    return (
        <>
            <div className='mt-10 ml-10 mb-[2vw]'>
                <p className='text-[4vw] font-bold'>Who Are <span className='text-[var(--secondary-color)]'>We?</span></p>
            </div>
            <Me></Me>
        </>
        

    )
}

export default Us