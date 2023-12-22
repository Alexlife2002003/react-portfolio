import React from 'react'
import CV from '../../assets/CV_Alexia.pdf';
//<a href={cv} download> Download CV></a>
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
