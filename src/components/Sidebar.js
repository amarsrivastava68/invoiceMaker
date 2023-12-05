import React from "react";
import logo from './logo.png'
const Navbar = ({show}) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <ul>
        
        <li>
          <a href="first link">Home</a>
        </li>
        <li>
          <a href="first link">About Us</a>
        </li>
        <li>
          <a href="first link">Explore more</a>
        </li>
        <li>
          <a href="first link">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
