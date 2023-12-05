import React from 'react';
import logo from './logo.png';

const Navbar = ({ show, toggleNav }) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <button className="p" onClick={toggleNav} variant="danger">
        X
      </button>

      <br />
      <br />

      <ul>
        <h4 style={{ color: 'white', alignItems: 'center' }}>
          Finance Free Applications
        </h4>
        <br></br>
        <p className="top-heading">Top Heading 1</p>

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Explore more</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>

      <ul>
        
        <p className="top-heading">Top Heading 2</p>

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Explore more</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>

      <ul>
        
        <p className="top-heading">Top Heading 3</p>

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Explore more</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
