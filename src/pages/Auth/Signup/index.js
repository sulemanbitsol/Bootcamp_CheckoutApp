import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, FormGroup, Input, Label, Row, Col } from 'reactstrap'
import axios from "axios";
import { register } from '../../../apis/auth.api';

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    age: 18,
    contact: "",
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setCredentials(prevCredentials => ({ ...prevCredentials, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("submittedValues: ", credentials);
    try{
      await axios.post(register, {...credentials})
      navigate("/auth/login")
    } catch(err) {
      console.log("failed to register user: ", err);
    }
  
  }

  return (
    <div className="container d-flex justify-content-center align-items-enter flex-column w-50" style={{height: "100vh", width: "100%"}}>
    <h3>Register Form</h3>
    <p className="text-muted fs-6">Already have an account? <Link to="/auth/login" className="text-decoration-underline text-black">Login</Link></p>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleName">
          Full Name
        </Label>
        <Input name="name" value={credentials.name} placeholder="Enter Full Name" onChange={handleChange} />
      </FormGroup>
      <Row>
        <Col>
      <FormGroup>
        <Label for="exampleAge">
          Age
        </Label>
        <Input name="number" value={credentials.age} placeholder="Enter Age" onChange={handleChange} />
      </FormGroup>
        </Col>
        <Col>
      <FormGroup>
        <Label for="exampleContact">
          Contact
        </Label>
        <Input name="contact" value={credentials.contact} placeholder="Enter Contact" onChange={handleChange} />
      </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleEmail">
          Email Address
        </Label>
        <Input name="email" value={credentials.email} placeholder="Enter Email Address" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleprice">
          Password
        </Label>
        <Input type="password" name="password" placeholder="Enter Password" value={credentials.password} onChange={handleChange} />
      </FormGroup>
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Register