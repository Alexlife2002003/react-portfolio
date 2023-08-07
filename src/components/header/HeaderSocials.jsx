import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com" target='_blank'><AiOutlineGithub /></a>
        <a href="https://dribbble.com" target='_blank'><FiDribbble /></a>
      
    </div>
  )
}

export default HeaderSocials
