import React from "react";
import { MdDocumentScanner } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
const Download = () => {
  return (
    <div className="downloader">
      <br/>
      <h4>Download Invoice</h4>
      <br />
      <hr />
      <span style={{ marginRight: "40px", fontWeight: "bold" }}>Theme</span>
      <span>
        <button
          style={{
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            backgroundColor: "#333",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "0 5px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        ></button>
        <button
          style={{
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "0 5px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        ></button>
        <button
          style={{
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            backgroundColor: "brown",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "0 5px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        ></button>
        <button
          style={{
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            backgroundColor: "green",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "0 5px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        ></button>
        <button
          style={{
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            backgroundColor: "orange",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "0 1px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        ></button>
      </span>
      <hr />
      <br />
      <div
        style={{ display: "flex", flex: "row", justifyContent: "space-around" }}
      >
        
        
          <MdDocumentScanner   style={{ fontSize: "4.5em" }}/>
        
        <SiMicrosoftexcel  style={{ fontSize: "4.5em" }}/>
        <FaFileExcel  style={{ fontSize: "4.5em" }} />
      </div>
      
      <div
        style={{ display: "flex", flex: "row", marginTop : '5px' ,justifyContent: "space-around" }}
      >
        
          <p>Standard</p>
        
        <p style={ {marginLeft : '8px'}}>SpreadSheet</p>
        <p>Compact</p>
      </div>
    
      <hr/>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button type="button" className="btn btn-primary width-lg" >
    Save
  </button>
  <div style={{ display: "inline-block" }}>
    <button
      style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "5px 10px",
        borderRadius: "5px",
      }}
    >
      Download/Print
      <span style={{ marginLeft: "5px" }}> ▾ </span>
    </button>
    <ul style={{ display: "none" }}>
      <li>Download</li>
      <li>Print</li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default Download;
