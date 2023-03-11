import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'

const contact = () => {

  return (
    <section id='contact'>
      <h1
        className='text-center text-4xl font-bold mt-16 mb-20  text-green-300 xl:text-6xl'
        style={{ color: "#4a4a4a", fontWeight: 900 }}>
        <strong>Where can you Find us ?</strong>
      </h1>



      <div className='container contact__container'>

        <div>
          <iframe className='border-2 rounded-lg' title='mytitle' width='100%' height='600px' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.244033347068!2d77.6190964!3d12.9198653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150419a7f141%3A0xab101d5c1270d982!2sPlanet%20Aqua%20Pool!5e0!3m2!1sen!2sin!4v1677737591598!5m2!1sen!2sin" frameborder="0"/>
        </div>


        <div className="contact__options flex flex-col md:flex-row">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4 className='text-xl'>Email</h4>
            <h5 className='text-xl'>contact@planetaquapool.in</h5>
            <a className='text' href="mailto:contact@planetaquapool.in" target="_blank" rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4 className='text-xl'>Whatsapp</h4>
            <h5 className='text-xl'>+91 9380663886</h5>
            <a className='text' href="https://wa.me/919380663886" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
      </div>

      
    </section>
  )
}

export default contact