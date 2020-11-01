import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../../images/logos/logo.png'
import './NavbarMenu.css'
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <Navbar className='offset-sm-1' collapseOnSelect expand="lg">
      <img height='80px' src={logo} alt="" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className='mr-5' href="#features">Home</Nav.Link>
          <Nav.Link className='mr-5' href="#pricing">Our Portfolio</Nav.Link>
          <Nav.Link className='mr-5' href="#deets">Our Team</Nav.Link>
          <Nav.Link className='mr-5' href="#memes">Contact Us</Nav.Link>
          <Link to='/login'><button className="nav-btn mr-5">Login</button></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;