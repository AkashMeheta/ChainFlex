import React from 'react'
import '../../../index.css'

const Token = () => {
    const tokenDetails = [
        {
            name: "Etherium",
            balance: "1.000"
        },
        {
            name: "GorilaETH",
            balance: "100"
        },
        {
            name: "FlexToken",
            balance: "100"
        }
    ]
  return (
    <div className='ml-5 flex flex-col gap-8 mr-5'>
        {tokenDetails.map((token, index)=>(
            <div key={index} className={`flex items-center justify-between`}>
                <div className='flex gap-8 items-center'>
                    <div className=' rounded-[100%] p-2 bg-[#94c3ff] w-fit font-semibold text-xl'>{token.name.slice(0,1)}</div>
                    <div className='text-2xl font-bold '>{token.name}</div>
                </div>
                <div className='text-2xl font-bold '>{token.balance}</div>
            </div>
            
        ))}
    </div>
  )
}

export default Token