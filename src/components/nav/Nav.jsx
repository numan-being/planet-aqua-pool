import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdGridView} from 'react-icons/md'
import {TbListDetails} from 'react-icons/tb'
import {SiWheniwork} from 'react-icons/si'
import {BiMap} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='/#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiWheniwork/></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdGridView/></a>
      <a href='#testimonials'onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><TbListDetails/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMap/></a>
    </nav>
  )
}

export default Nav