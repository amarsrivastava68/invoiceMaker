import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MyForm = () => {
  const [formData, setFormData] = useState({
    logo: null,
    companyName: "",
    yourName: "",
    companyGSTIN: "",
    companyAddress: "",
    city: "",
    state: "India",
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
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ width: "60%", border: "2px dotted blue", padding: "20px" }}>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="logo">
          <Form.Label>Upload Logo:</Form.Label>
          <Form.Control
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="companyName">
          <Form.Label>Your Company Name:</Form.Label>
          <Form.Control
            type="text"
            name="companyName"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="yourName">
          <Form.Label>Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="yourName"
            placeholder="Enter your name"
            value={formData.yourName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="companyGSTIN">
          <Form.Label>Company's GSTIN:</Form.Label>
          <Form.Control
            type="text"
            name="companyGSTIN"
            placeholder="Enter company's GSTIN"
            value={formData.companyGSTIN}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="companyAddress">
          <Form.Label>Company’s Address:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="companyAddress"
            placeholder="Enter company's address"
            value={formData.companyAddress}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State:</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="India"
            disabled
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
