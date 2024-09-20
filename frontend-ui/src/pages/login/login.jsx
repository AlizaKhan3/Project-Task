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


// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';

// function App() {

//   const [justifyActive, setJustifyActive] = useState('tab1');;

//   const handleJustifyClick = (value) => {
//     if (value === justifyActive) {
//       return;
//     }

//     setJustifyActive(value);
//   };

//   return (
//     <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

//       <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
//             Login
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
//             Register
//           </MDBTabsLink>
//         </MDBTabsItem>
//       </MDBTabs>

//       <MDBTabsContent>

//         <MDBTabsPane show={justifyActive === 'tab1'}>

//           <div className="text-center mb-3">
//             <p>Sign in with:</p>

//             <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='facebook-f' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='twitter' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='google' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='github' size="sm"/>
//               </MDBBtn>
//             </div>

//             <p className="text-center mt-3">or:</p>
//           </div>

//           <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

//           <div className="d-flex justify-content-between mx-4 mb-4">
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//             <a href="!#">Forgot password?</a>
//           </div>

//           <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
//           <p className="text-center">Not a member? <a href="#!">Register</a></p>

//         </MDBTabsPane>

//         <MDBTabsPane show={justifyActive === 'tab2'}>

//           <div className="text-center mb-3">
//             <p>Sign un with:</p>

//             <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='facebook-f' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='twitter' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='google' size="sm"/>
//               </MDBBtn>

//               <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//                 <MDBIcon fab icon='github' size="sm"/>
//               </MDBBtn>
//             </div>

//             <p className="text-center mt-3">or:</p>
//           </div>

//           <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
//           <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
//           <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

//           <div className='d-flex justify-content-center mb-4'>
//             <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
//           </div>

//           <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

//         </MDBTabsPane>

//       </MDBTabsContent>

//     </MDBContainer>
//   );
// }

// export default App;


import React from 'react';
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

function LoginCard() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color:"000"}}>
            Landsat Reflectance Data:<br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>On the Fly and at your Fingertips
            </span>
          </h1>
        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              {/* <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow> */}

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>LOGIN</MDBBtn>

              <div className="text-center">

                <p>New to our App?<button style={{backgroundColor:"transparent", boxShadow:"none", color:"#3b71ca", border:"none"}}>Regsiter Now</button></p>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginCard;