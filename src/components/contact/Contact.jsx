
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();
     emailjs.sendForm('service_uahdkee', 'template_t8uziyh', form.current, 'vzrfoyzoM_V8xtVPz')
     e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>hernandezmtzalexia@gmail.com</h5>
            <a href="mailto:hernandezmtzalexia@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Alex Hernandez</h5>
            <a href="https://m.me/alexhernandez299" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>4922253957</h5>
            <a href="http://wa.me/524922253957" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email"  placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact

