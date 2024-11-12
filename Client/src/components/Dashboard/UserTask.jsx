import React from 'react'
import { LuSend } from "react-icons/lu";
import { BiSolidCoinStack } from "react-icons/bi";
import { IoFlashOff } from "react-icons/io5";
import { Link } from "react-router-dom";
const tasks = [
    {
        name: "Stack Token",
        subTitle: "Earn Rewards",
        img: <BiSolidCoinStack  size={30}/>,
        textColor: "text-black",
        bgColor: "bg-[#94c3ff]",
        redirectUrl: "/stack"
    },
    {
        name: "Flash Loan",
        subTitle: "Arbitage",
        img: <IoFlashOff size={30}/>,
        textColor: "text-black",
        bgColor: "bg-[#94c3ff]",
        redirectUrl: "#"
    }
]
const UserTask = () => {
  return (
    <div className='flex justify-around mt-7 flex-wrap'>
        {
            tasks.map((task) => (
                <Link to={`${task.redirectUrl}`} className='cursor-pointer' key={task.name}>
                    <div className={`${task.textColor} ${task.bgColor} rounded-full p-2 px-6 border-3 border-black flex items-center gap-5`}>
                        <div>{task.img}</div>
                        <div className='flex flex-col items-center'>
                            <div className='text-xl font-bold'>{task.name}</div>
                            <div className='font-semibold'>{task.subTitle}</div>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default UserTask