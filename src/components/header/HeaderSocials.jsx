import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/hernandezmtzalexia/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Alexlife2002003" target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
    </div>
  )
}

export default HeaderSocials
