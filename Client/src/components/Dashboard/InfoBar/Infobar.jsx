import React, { useState } from 'react'
import {Token, Acitivity} from '../../index'
import '../../../index.css';
const Infobar = () => {

    const [ Tab, setTab ] = useState("Tokens");
    const [isActive, setisActive ] = useState("Tokens");
    const handelOnClick = (value) =>{
        setTab(value);
        setisActive(value);
        console.log(value);
    }
  return (
    <div>
        <div className='flex justify-around mb-4'>
            <button href="" className={`cursor-pointer `} onClick={()=>handelOnClick("Tokens")}><h1 className={` text-2xl font-bold ${isActive == "Tokens" ? 'w-fit rounded-full px-4 py-2 bg-[var(--secondary-color)] font-semibold text-black': 'text-purple-800' }`}>Tokens</h1></button>
            <button href="" className={`cursor-pointer`} onClick={()=>handelOnClick("Activity")}><h1 className={` text-2xl font-bold ${isActive == "Activity" ? 'w-fit rounded-full px-4 py-2 bg-[var(--secondary-color)] font-semibold text-black': 'text-purple-800' }`}>Activity</h1></button>
        </div>
        {Tab == "Tokens" ? <div className='text-black font-3xl'><Token/></div> : <div className='text-black font-3xl'><Acitivity/></div> }
    </div>
  )
}

export default Infobar
// ${isActive == token.name ? 'border-b-2 border-blue-500 font-semibold text-blue-500':'' 