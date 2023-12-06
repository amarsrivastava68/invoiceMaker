import React from "react";

const Download = () => {
  return (
    <div className="downloader">
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
          onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          
        </button>
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
          onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          
        </button>
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
          onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          
        </button>
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
          onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          
        </button>
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
          onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          
        </button>
      </span>
      <hr />
    </div>
  );
};

export default Download;

