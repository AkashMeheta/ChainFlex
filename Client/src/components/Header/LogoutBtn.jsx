import React from 'react'
import {useDispatch} from 'react-redux'
import authServices from '../appwrite/auth'
import { logout } from '../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandeler = () => {
        authServices.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block  duration-200 hover:text-[#EC8305] hover:text-2xl hover:scale-110 hover:text-bold rounded-full' onClick={logoutHandeler}>
        LogOut
    </button>
  )
}

export default LogoutBtn