import React from 'react';
import logo from './logo.png';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { FaFileInvoiceDollar } from "react-icons/fa6";
<FaMoneyCheckDollar />

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
        <p className="top-heading"><FaMoneyBillTrendUp style={{ fontSize: "1.5em"  , padding : '5px'}}/>Top Heading 1</p>

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
        
        <p className="top-heading"><FaFileInvoiceDollar  style={{ fontSize: "1.5em"  , padding : '5px'}} />Top Heading 2</p>

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
        
        <p className="top-heading"><FaMoneyCheckDollar style={{ fontSize: "1.5em"  , padding : '5px'}}/>Top Heading 3</p>

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
