import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineMessage} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BsGrid} from 'react-icons/bs'

const Nav = () => {
  return (
     <nav>
       <a href='#' className='active'><AiOutlineHome/></a>
       <a href='#about'><FiUser/></a>
       <a href='#projects'><BsGrid/></a>
       <a href='#contact'><AiOutlineMessage/></a>
     </nav>
  )
}

export default Nav