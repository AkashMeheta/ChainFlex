import React from 'react'
import { IoMdSwap } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { RiFolderReceivedFill } from "react-icons/ri";
import { PiPlusMinusBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import "../../index.css";
import SendUi from "../Dashboard/ActivityUtils/Send";
import Receive from './ActivityUtils/Receive';
import {Button} from "../index"
const activites = [
    {
        text: "Send",
        img: <LuSend size={30}/>,
        textColor: "text-black",
        bgColor: "bg-[#94c3ff]",
        component: <SendUi/>
    },
    {
        text: "Receive",
        img: <RiFolderReceivedFill size={30}/>,
        textColor: "text-black",
        bgColor: "bg-[#94c3ff]",
        component: <Receive/>
    },
    {
        text: "Swap",
        img: <IoMdSwap size={30}/>,
        textColor: "text-black",
        bgColor: "bg-[#94c3ff]",
        component: <><h1>Working On It..</h1></>
    },
    {
        text: "Buy/Sell",
        img: <PiPlusMinusBold size={30}/>,
        textColor: "text-black",
        bgColor: "bg-[#94c3ff]",
        component: <><h1>Working On It..</h1></>
    }
]

const UserActivities = () => {
    
    // const navigate = useNavigate();
    // const handelOnClick = (url) =>{
    //     navigate(url);
    // }

  return (
    <>
        <div className='flex justify-around mt-7 flex-wrap'>
            {
                activites.map((activity) => (
                    <Popup  key={activity.text} trigger={<a href={'#'} className='cursor-pointer'>
                        <div className='flex flex-col items-center'>
                            <div className={`${activity.textColor} ${activity.bgColor} rounded-full p-4 border-3 border-black`}>{activity.img}</div>
                            <span className={`${activity.textColor} font-semibold mt-2`}>{activity.text}</span>
                        </div>
                    </a>} >
                    {
                        close => (
                            <div className='border-4 p-5 shadow-xl bg-teal-400 text-black'>
                                {activity.component}
                                <Button bgColor="bg-[#EC8305]" textColor="text-black" className="rounded-xl font-bold text-xl mt-10 hover:bg-[#DBD3D3] hover:text-2xl hover:font-bold" onClick=
                                {() => close()}>
                                    Close
                                </Button>
                            </div>
                        )
                    }
                        
                </Popup>
                    
                ))
            }
        </div>

    </>
  )
}

export default UserActivities