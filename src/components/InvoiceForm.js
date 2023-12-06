import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaFileUpload } from "react-icons/fa";

const MyForm = () => {
  const [formData, setFormData] = useState({
    logo: null,
    companyName: "",
    yourName: "",
    companyGSTIN: "",
    companyAddress: "",
    city: "",
    state: "Uttar Pradesh",
    country : "India"
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ width: "60%", border: "2px dotted blue", padding: "20px" , marginTop : "65px" , borderRadius: '14px' , marginLeft: "140px"}}>
      <Form onSubmit={handleSubmit}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Form.Group controlId="logo"  style ={{display : "flex"}}>
  <Form.Label>
    <FaFileUpload  style ={{width : "65px" , height : "55px" , paddingTop: '10px'}}/>
    <span style={{ display: "none" }}>Choose File</span>
  </Form.Label>
  <Form.Control
    type="file"
    name="logo"
    accept="image/*"
    onChange={handleChange}
    className="align-self-end"
    style={{
      visibility: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      width: 1,
      height: 1,
      opacity: 0,
    }}
  />
  <div style={{ display: "flex-column", alignItems: "left" ,justifyContent : "left" }}>
    <p style={{ marginLeft: "20px" }}>Upload your company logo here</p>
    <p style={{ fontSize: "12px", marginLeft: '20px' }}>240 x 240 pixels @ 72 DPI, Maximum size of 1MB.</p>
  </div>
  
</Form.Group>

  <h1>TAX INVOICE</h1>
  
</div>
<br/>


<Form.Group controlId="companyName" className="col-md-6" style = {{padding : '2px'}}>
  <Form.Control
    type="text"
    name="companyName"
    placeholder="Enter your company name"
    value={formData.companyName}
    onChange={handleChange}
    required
  />
</Form.Group>

<Form.Group controlId="yourName" className="col-md-6" style = {{padding : '2px'}}>
  <Form.Control
    type="text"
    name="yourName"
    placeholder="Enter your name"
    value={formData.yourName}
    onChange={handleChange}
    required
  />
</Form.Group>

<Form.Group controlId="companyGSTIN" className="col-md-6" style = {{padding : '2px'}}>
  <Form.Control
    type="text"
    name="companyGSTIN"
    placeholder="Enter company's GSTIN"
    value={formData.companyGSTIN}
    onChange={handleChange}
    required
  />
</Form.Group>

<Form.Group controlId="companyAddress" className="col-md-6" style = {{padding : '2px'}}>
  <Form.Control
    type  = "text"
    rows={3}
    name="companyAddress"
    placeholder="Enter company's address"
    value={formData.companyAddress}
    onChange={handleChange}
    required
  />
</Form.Group>

<Form.Group controlId="city" className="col-md-6" style = {{padding : '2px'}}>
  <Form.Control
    type="text"
    name="city"
    placeholder="Enter city"
    value={formData.city}
    onChange={handleChange}
    required
  />
</Form.Group>

<Form.Group controlId="state" className="col-md-6" style = {{padding : '2px'}}>
 
  <Form.Control
    type="text"
    name="state"
    value={formData.state}
    onChange={handleChange}
    placeholder="Uttar Pradesh"
   
  />
</Form.Group>

<Form.Group controlId="country" className="col-md-6" style = {{padding : '2px'}}>
 
  <Form.Control
    type="text"
    name="country"
    value={formData.country}
    onChange={handleChange}
    placeholder="India"
    
  />
</Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;
