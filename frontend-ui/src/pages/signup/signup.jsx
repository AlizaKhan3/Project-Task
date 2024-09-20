// import * as React from 'react';
// import CardComponent from '../../components/card';
// import "./signup.css";

// function SignupCard() {
//   const fields = [
//     { label: 'Email', type: 'text' },
//     { label: 'Password', type: 'password' },
//     { label: 'Phone Number', type: 'text' },
//     { label: 'Country', type: 'select' },
//     { label: 'Location', type: 'text' }, // added location field
//   ];

//   const countryOptions = [
//     { label: 'USA', value: 'USA' },
//     { label: 'Canada', value: 'Canada' },
//     { label: 'Mexico', value: 'Mexico' },
//   ];

//   const buttonAction = () => {
//     console.log('Signup button clicked');
//   };

//   return (
//     <div className="card-container">
//       {/* <div className="card"> */}
//       <CardComponent
//         title="Signup"
//         subtitle="Create an account"
//         fields={fields}
//         buttonLabel="Signup"
//         buttonAction={buttonAction}
//         countryOptions={countryOptions}
//       />
//       {/* </div> */}
//     </div>
//   );
// }

// export default SignupCard;


import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import validation from './signupValidations';
import { Typography } from 'antd';

const { Text } = Typography;

function SignupCard() {
  const [values, setvalues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleInputValue = (e) => {
    setvalues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
  }

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  }
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <form onSubmit={handleSubmit}>
      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: "000" }}>
            Landsat Reflectance Data:<br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>On the Fly and at your Fingertips
            </span>
          </h1>
        </MDBCol>
        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput name='firstName' wrapperClass='mb-4' label='First name' id='form1' type='text' />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput name='lastName' wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                </MDBCol>
              </MDBRow>

              <div style={{ marginBottom: '10px' }}>
                <MDBInput onChange={handleInputValue} name='email' label='Email' wrapperClass='mb-1' id='form3' type='email' />
                {errors.email !== null && <Text type="danger">{errors.email}</Text>}
              </div>
              <div style={{ marginBottom: '20px' }}>
                <MDBInput onChange={handleInputValue} name='password' wrapperClass='mb-1' label='Password' id='form4' type='password' />
                {errors.password !== null && <Text type="danger">{errors.password}</Text>}
              </div>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn type='submit' className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">
                <p>Already have an Account? <Link to="/" style={{ backgroundColor: "transparent", boxShadow: "none", color: "#3b71ca", border: "none" }}> Login</Link></p>
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>
    </form>

    </MDBContainer >
  );
}

export default SignupCard;