// src/components/Header.js
import {React ,useState} from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { ThreeBars, Person } from 'react-bootstrap-icons'; // Assuming you have installed react-bootstrap-icons
import logo from './logo.png'
import {GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './Sidebar'
const Header = ({toggleNav}) => {

    
  return (
    <Navbar bg="light" expand="lg">
      <GiHamburgerMenu style={{width : '50px', color:"black"}} onClick={toggleNav}/>
      <img src={logo} style={{ width: '120px' }} alt="Logo" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Button variant="outline-primary" className="me-2">
            Signup
          </Button>
          <Button variant="primary">
            Login
          </Button>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
    
  );
};

export default Header;
