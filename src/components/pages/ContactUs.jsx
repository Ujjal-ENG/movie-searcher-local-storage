import React from "react";
import Login from "../../assets/login.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactUs = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form>
        <h1>Contact With Us</h1>
        <Form.Group className="mb-4  " controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Type your Name"
            className="mb-4"
          />
          <Form.Control
            type="email"
            placeholder="Type your email"
            className="mb-4"
          />
          <textarea
            type="email"
            className="w-100 text-center"
            placeholder="Type your Text"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Email
        </Button>
      </Form>

      {/* right side images */}
      <img src={Login} alt="" />
    </div>
  );
};

export default ContactUs;
