import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/App.css'
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='navbar' >
        <Container>
          <Navbar.Brand href="#home"><img
            src='https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wx6cdcfdwctv7vf3jvyu'
            height='50'
            width='50'
            alt='brand logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto  navbarlist">
              <Nav.Link><Link to={'/about'} className='links'>ABOUT</Link></Nav.Link>
              <Nav.Link><Link to={'/home'} className='links'>HOME</Link></Nav.Link>
              <Nav.Link><Link to={'/products'} className='links'>PRODUCTS</Link></Nav.Link>
              <Nav.Link><Link to={'/contactus'} className='links'>CONTACT US</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default NavBar