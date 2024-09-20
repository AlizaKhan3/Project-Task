// import * as React from 'react';
// import CardComponent from '../../components/card';
// import "./login.css"

// function LoginCard() {
//   const fields = [
//     { label: 'Email', type: 'text' },
//     { label: 'Password', type: 'password' },
//   ];

//   const buttonAction = () => {
//     console.log('Login button clicked');
//   };

//   return (
//     <div className="card-container">
//     <CardComponent
//       title="Login"
//       subtitle="Enter your credentials"
//       fields={fields}
//       buttonLabel="Login"
//       buttonAction={buttonAction}
//     />
//     </div>
//   );
// }

// export default LoginCard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { BackTop } from 'antd';
import Password from 'antd/es/input/Password';

function LoginCard() {
  const [values, setvalues] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleInputValue = (e) => {
    setvalues(prev=> ({...prev, [e.target.name] : [e.target.value]}))
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
                <MDBInput onChange={handleInputValue} name='email' wrapperClass='mb-4' label='Email' id='form3' type='email' />
                <MDBInput onChange={handleInputValue} name='password' wrapperClass='mb-4' label='Password' id='form4' type='password' />

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn type='submit' className='w-100 mb-4' size='md'>LOGIN</MDBBtn>

                <div className="text-center">

                  <p>New to our App? <Link to="./register" style={{ backgroundColor: "transparent", boxShadow: "none", color: "#3b71ca", border: "none" }}> Regsiter Now</Link></p>

                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        
      </MDBRow>
</form>
    </MDBContainer>
  );
}

export default LoginCard;