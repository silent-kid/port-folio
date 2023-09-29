import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='nav'>
      <span className='logo'>Jawwad</span>
      <div className='links'>
        <Link className='link'>About Me</Link>
        <Link className='link'>Skills</Link>
        <Link className='link'>Projects</Link>
        <Link className='link'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
