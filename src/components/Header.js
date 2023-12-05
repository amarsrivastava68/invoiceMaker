// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { ThreeBars, Person } from 'react-bootstrap-icons'; // Assuming you have installed react-bootstrap-icons

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      
      <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
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
