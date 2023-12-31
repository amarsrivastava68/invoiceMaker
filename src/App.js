
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";
import "./App.css";
import Download from './components/Download'
import Form from "./components/InvoiceForm";
const App = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div>
      <Header show={showNav} toggleNav={toggleNav} />
      <Sidebar show={showNav} toggleNav={toggleNav} />
      <div className="mainpage"><Form />
      <Download/>
      </div>
    </div>
  );
};

export default App;
