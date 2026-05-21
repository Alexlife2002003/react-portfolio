import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

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
        {/* ==================== CONTACT OPTIONS ==================== */}
        <div className="contact_options">
          <article className='contact_option glass-card'>
            <div className="contact_option-icon-wrapper option_email">
              <MdOutlineEmail className='contact_option-icon'/>
            </div>
            <h4>Email</h4>
            <h5>hernandezmtzalexia@gmail.com</h5>
            <a href="mailto:hernandezmtzalexia@gmail.com" target='_blank' rel="noreferrer">Send an email</a>
          </article>
          
          <article className='contact_option glass-card'>
            <div className="contact_option-icon-wrapper option_messenger">
              <RiMessengerLine className='contact_option-icon' />
            </div>
            <h4>Messenger</h4>
            <h5>Alex Hernandez</h5>
            <a href="https://m.me/alexhernandez299" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          
          <article className='contact_option glass-card'>
            <div className="contact_option-icon-wrapper option_whatsapp">
              <BsWhatsapp className='contact_option-icon'/>
            </div>
            <h4>WhatsApp</h4>
            <h5>+52 492 225 3957</h5>
            <a href="http://wa.me/524922253957" target='_blank' rel="noreferrer">Send a WhatsApp</a>
          </article>
        </div>

        {/* ==================== CONTACT FORM ==================== */}
        <form ref={form} onSubmit={sendEmail} className="contact_form glass-card">
          <div className="form_group">
            <input type="text" name='name' id="contact-name" placeholder=' ' required />
            <label htmlFor="contact-name">Your Full Name</label>
          </div>
          
          <div className="form_group">
            <input type="email" name='email' id="contact-email" placeholder=' ' required />
            <label htmlFor="contact-email">Your Email Address</label>
          </div>
          
          <div className="form_group">
            <textarea name="message" id="contact-message" placeholder=' ' rows="6" required></textarea>
            <label htmlFor="contact-message">Write Your Message</label>
          </div>
          
          <button type='submit' className='btn btn-primary btn-submit'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
