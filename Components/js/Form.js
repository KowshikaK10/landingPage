import React from 'react'

import { Link, Outlet } from 'react-router-dom';
const Form = () => {
  return (
    <>
      <h1>Start Your <strong>BUSINESS</strong> With US!</h1>
      <p>
        Our new service makes it easy for you <br />to make new product.
      </p>
      <div className='text'>
        <form>
          <div><input type="text" placeholder='Name' /></div><br />
          <div><input type="emailid" placeholder='Email id' /></div><br />
          <Link to='/success'><button id='formButton'>Send</button></Link>
        </form>
      </div>
      <Outlet />
    </>
  )
}

export default Form