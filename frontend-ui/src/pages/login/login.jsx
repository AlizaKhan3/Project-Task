import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  // MDBCheckbox,
}
  from 'mdb-react-ui-kit';
import validation from './loginValidation';
import { Typography } from 'antd';
import axios from 'axios';

const { Text } = Typography;

function AppLoginCard() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8000/', values)
        .then((res) => {
          console.log("response Of Login-->", res);
          if (res.data.statusbar === "Success Login") {
            navigate('/location');
            console.log("Login processed successfully and navigated to location!");
          } else {
            console.log(res.data.Error || "Login failed");
          }
        })
        .catch((err) => console.log(err));
    } else {
      setErrors(validationErrors);
    }
  };
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const validationErrors = validation(values);
  //   if (Object.keys(validationErrors).length === 0) {
  //     axios.post('/', values)
  //       .then((res) => {
  //         console.log("Response from server:", res);
  //         console.log("Response data:", res.data);
  //         if (res.data.statusbar === "Success") {
  //           navigate('/location');
  //           console.log("Login processed successfully and navigated to location!");
  //         } else {
  //           console.log(res.data.Error || "Login failed");
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };


  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
             <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: "black" }}>
              Landsat Reflectance Data:<br />
              <span style={{ color: '#ce2031' }}>On the Fly and at your Fingertips
              </span>
            </h1>
          </MDBCol>
          <MDBCol md='6' className='position-relative'>
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>
                <div style={{ marginBottom: '10px' }}>
                  {/* <MDBInput onChange={handleInputValue} name='email' label='Email' wrapperClass='mb-1' id='form3' type='email' /> */}
                  <MDBInput onChange={e => setValues({ ...values, email: e.target.value })} name='email' wrapperClass='mb-1' label='Email' id='form1' type='email' />

                  {errors.email !== null && <Text type="danger">{errors.email}</Text>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <MDBInput onChange={e => setValues({...values, password: e.target.value })} name='password' wrapperClass='mb-1' label='Password' id='form4' type='password' />
                  {errors.password !== null && <Text type="danger">{errors.password}</Text>}
                </div>
                {/* <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div> */}
                <MDBBtn type='submit' className='w-100 mb-4'  style={{background: "#ce2031"}} size='md'>LOGIN</MDBBtn>
                <div className="text-center">
                  <p>New to our App? <Link to="./register" style={{ backgroundColor: "transparent", boxShadow: "none", color: "#ce2031", border: "none" }}> Regsiter Now</Link></p>
                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>
      </form>
    </MDBContainer>
  );
}
export default AppLoginCard;