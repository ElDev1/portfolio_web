import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>deviamaolo@gmail.com</h5>
            <a href="mailto:deviamaolo@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>Devi Amaolo</h5>
            <a href="https://www.linkedin.com/in/devi-amaolo-773135161/" target="_blank">Contact me</a>
          </article>
        </div>
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button> 
          </form>
      </div>
    </section>
  )
}

export default Contact
