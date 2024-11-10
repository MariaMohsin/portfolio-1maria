import React from 'react'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='container pt-8'>
     <div className='flex justify-between items-center'>
        <div className='text=xl font-bold'>MARIA</div>
        <ul className='gape-10 lg:gap-16 hidden md:flex'>

           <li className='menuLink'><a href='#hero'>Home</a></li>
           <li className='menuLink'><a href='#about'>About</a></li>
           <li  className='menuLink'><a href='#projects'>Projects</a></li>
           <li  className='menuLink'><a href='#skills'>Skills</a></li>
           <li  className='menuLink'><a href='#contact'>Contact</a></li>
        </ul>
        <MdOutlineMenu className='md:hidden' size={30} />



     </div>
    </div>
  )
}

export default Navbar