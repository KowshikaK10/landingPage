import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Contactus = () => {
  return (
    <>
      <div className='contactus' style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem' }}><u>Contact us</u></h1>
        <p style={{ fontSize: '2rem' }}>Let us know how we can help</p>
        <div className='contactForm p-5 ' style={{ width: '100%', height: '100%' }}>
          <div className='text'>
            <form>
              <div><input type="text" placeholder='Name' /></div><br />
              <div><input type="emailid" placeholder='Email id' /></div><br />
              <Link to='/success'><button id='formButton'>Send</button></Link>
            </form>
          </div>
          <i className='icons'><FaFacebook size={40} /></i>
          <i className='icons'><FaInstagram size={40} /> </i>
          <i className='icons'><FaYoutube size={40} /> </i>
          <i className='icons'><FaWhatsapp size={40} /></i>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Contactus