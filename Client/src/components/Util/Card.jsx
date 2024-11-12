import React from 'react'
import { Button } from '../index'

const Card = ({ tag, heading, bullet1, bullet2, bullet3, mainColor, secondColor, textColor="text-black", btnHoverColor }) => {
    return (
            <div className={`ml-6 border-4 border-solid border-black w-[45%] h-auto ${mainColor} rounded-3xl hover:scale-110 hover:skew-y-1 hover:skew-x-1 hover:drop-shadow-2xl hover:shadow-cyan-500/50`}>
                <div className='p-8 flex flex-col gap-4 '>
                    <Button bgColor={`${secondColor}`} textColor={`${textColor}`} className={`border-2 border-solid border-black rounded-xl max-w-fit font-bold text-xl   hover:text-2xl hover:font-bold ${btnHoverColor}`}>
                        {tag}
                    </Button>
                    <h1 className='text-4xl font-bold text-black mt-3 mb-3 hover:scale-110'>{heading}</h1>
                    <div className={`${secondColor} border-2 border-solid border-black rounded-xl drop-shadow-lg p-2 ${textColor} font-semibold text-xl hover:scale-110`}>{bullet1}</div>
                    <div className={`${secondColor} border-2 border-solid border-black rounded-xl drop-shadow-lg p-2 ${textColor} font-semibold text-xl hover:scale-110`}>{bullet2}</div>
                    <div className={`${secondColor} border-2 border-solid border-black rounded-xl drop-shadow-lg p-2 ${textColor} font-semibold text-xl hover:scale-110`}>{bullet3}</div>
                </div>
            </div>
    )
}

export default Card