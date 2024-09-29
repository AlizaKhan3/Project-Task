import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import validation from './signupValidations';
import { Typography } from 'antd';
import axios from 'axios';

const { Text } = Typography;

 // const handleInputValue = (e) => {
  //   setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleInputValue = (e) => {
  //   setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     const user = JSON.parse(storedUser);
  //     setValues(user);
  //   }
  // };


function AppSignupCard() {
  const [values, setValues] = useState({ firstname: '', lastname: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit function called');
    const validationErrors = validation(values);
    console.log('validationErrors:', validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed with API call
      axios.post('http://localhost:8000/register', values)
        .then((res) => {
          console.log("response-->", res);
          if (res.data.statusbar === "Successfully inserted data") {
            navigate('/');
          }
        })
        .catch((err) => console.log(err));
    } else {
      // Errors present, update errors state
      setErrors(validationErrors);
      console.log("Errors present, not submitting data");
    }
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: "#000" }}>
              Landsat Reflectance Data:<br />
              <span style={{ color: "#ce2031" }}>On the Fly and at your Fingertips</span>
            </h1>
          </MDBCol>
          <MDBCol md='6' className='position-relative'>
            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>
                <MDBRow>
                  <MDBCol col='6' style={{ marginBottom: 10 }}>
                    <MDBInput onChange={e => setValues({ ...values, firstname: e.target.value })} name='firstname' wrapperClass='mb-1' label='First Name' id='form1' type='text' />
                    {errors.firstname && <Text type="danger">{errors.firstname}</Text>}
                  </MDBCol>
                  <MDBCol col='6' style={{ marginBottom: 10 }}>
                    <MDBInput onChange={e => setValues({ ...values, lastname: e.target.value })} name='lastname' wrapperClass='mb-1' label='Last Name' id='form1' type='text' />
                    {errors.lastname && <Text type="danger">{errors.lastname}</Text>}
                  </MDBCol>
                </MDBRow>
                <div style={{ marginBottom: 15 }}>
                  <MDBInput onChange={e => setValues({ ...values, email: e.target.value })} name='email' wrapperClass='mb-1' label='Email' id='form1' type='email' />
                  {errors.email && <Text type="danger">{errors.email}</Text>}
                </div>
                <div style={{ marginBottom: 15 }}>
                  <MDBInput onChange={e => setValues({ ...values, password: e.target.value })} name='password' wrapperClass='mb-1' label='Password' id='form1' type='password' />
                  {errors.password && <Text type="danger">{errors.password}</Text>}
                </div>
                <MDBCheckbox style={{ background: "#ce2031", borderColor: "#ce2031" }} name='flexCheck' id='flexCheckDefault' label='Subscribe to our newsletter' />
                <MDBBtn type='submit' className='w-100 mb-4' size='md' style={{ background: "#ce2031" }}>Sign Up</MDBBtn>
                <div className="text-center">
                  <p>Already have an Account? <Link to="/" style={{ backgroundColor: "transparent", boxShadow: "none", color: "#ce2031" }}> Login</Link></p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default AppSignupCard;
