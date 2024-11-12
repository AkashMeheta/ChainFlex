// import React from 'react'

// const Navbar = () => {
//   return (
//     <ul className='flex flex-row gap-16 text-[1.3rem]'>
//       <li className='hover:text-[#EC8305] hover:text-2xl hover:scale-110 hover:text-bold'><a href="">Home</a></li>
//       <li className='hover:text-[#EC8305] hover:text-2xl hover:scale-110 hover:text-bold'><a href="">Explore</a></li>
//       <li className='hover:text-[#EC8305] hover:text-2xl hover:scale-110 hover:text-bold'><a href="">Contact us</a></li>
//       <li className='hover:text-[#EC8305] hover:text-2xl hover:scale-110 hover:text-bold'><a href="">Register/Log in</a></li>
//     </ul>
//   )
// }

// export default Navbar

import React, { useEffect } from 'react'
import { LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()


  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Explore',
      slug: "/explore",
      active: true
    },
    {
      name: 'Contact us',
      slug: "/Contact_us",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    }
  ]
  return (
    <>
      <ul className='flex flex-row gap-16 text-[1.3rem]'>
        {navItems.map((item) => (
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className='hover:text-[#EC8305] hover:text-2xl hover:scale-110 hover:text-bold'>
                {item.name}
              </button>
            </li>
          ) : null
        ))}
        {authStatus && (
          <li>
            <LogoutBtn></LogoutBtn>
          </li>
        )}
      </ul>
    </>

  )
}

export default Header