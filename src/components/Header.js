// src/components/Header.js
import { React, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { ThreeBars, Person } from "react-bootstrap-icons"; // Assuming you have installed react-bootstrap-icons
import logo from "./logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
const Header = ({ toggleNav }) => {
  return (
    <Navbar bg="light" expand="lg">
      <button style={{ width: "50px", color: "black", border: "2px" }}>
       
        <GiHamburgerMenu onClick={toggleNav} />
      </button>
      <img src={logo} style={{ width: "120px" }} alt="Logo" />
      <div
        style={{
          flex: "column",
          width: "300px",
          paddingLeft: "50px",
          paddingTop: "4px",
          lineHeight: "1px",
          fontWeight: "bold",
        }}
      >
        <p>Free GST Invoice Generator</p>
        <br />
        <small>By Zoho Invoice</small>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ paddingRight: "5px" }}>
          <Button variant="outline-primary" className="me-2">
            Check Out Zoho Invoice
          </Button>
          <Button variant="danger">Create an account</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
