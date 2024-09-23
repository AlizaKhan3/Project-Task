// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import {
// //   MDBBtn,
// //   MDBContainer,
// //   MDBRow,
// //   MDBCol,
// //   MDBCard,
// //   MDBCardBody,
// //   MDBInput,
// //   MDBCheckbox,
// // }
// //   from 'mdb-react-ui-kit';
// // import validation from './loginValidation';
// // import { Typography } from 'antd';

// // const { Text } = Typography;

// // function AppLoginCard() {
// //   console.log('Rendering LoginCard component');
// //   const [values, setvalues] = useState({
// //     email: '',
// //     password: ''
// //   })

// //   const handleInputValue = (e) => {
// //     setvalues(prev => ({ ...prev, [e.target.name]: e.target.value }))
// //   }

// //   const [errors, setErrors] = useState({});

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setErrors(validation(values));
// //     console.log(values);
// //   }

// //   return (
// //     <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
// //       <form onSubmit={handleSubmit}>
// //         <MDBRow>

// //           <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

// //              <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: "000" }}>
// //               Landsat Reflectance Data:<br />
// //               <span style={{ color: '#ce2031' }}>On the Fly and at your Fingertips
// //               </span>
// //             </h1>
// //           </MDBCol>

// //           <MDBCol md='6' className='position-relative'>

// //             <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
// //             <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

// //             <MDBCard className='my-5 bg-glass'>
// //               <MDBCardBody className='p-5'>
// //                 <div style={{ marginBottom: '10px' }}>
// //                   <MDBInput onChange={handleInputValue} name='email' label='Email' wrapperClass='mb-1' id='form3' type='email' />
// //                   {errors.email !== null && <Text type="danger">{errors.email}</Text>}
// //                 </div>
// //                 <div style={{ marginBottom: '20px' }}>
// //                   <MDBInput onChange={handleInputValue} name='password' wrapperClass='mb-1' label='Password' id='form4' type='password' />
// //                   {errors.password !== null && <Text type="danger">{errors.password}</Text>}
// //                 </div>
// //                 <div className='d-flex justify-content-center mb-4'>
// //                   <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
// //                 </div>
// //                 <MDBBtn type='submit' className='w-100 mb-4' size='md'>LOGIN</MDBBtn>
// //                 <div className="text-center">
// //                   <p>New to our App? <Link to="./register" style={{ backgroundColor: "transparent", boxShadow: "none", color: "#3b71ca", border: "none" }}> Regsiter Now</Link></p>
// //                 </div>
// //               </MDBCardBody>
// //             </MDBCard>

// //           </MDBCol>

// //         </MDBRow>
// //       </form>
// //     </MDBContainer>
// //   );
// // }










// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBBtn,
// } from 'mdb-react-ui-kit';
// import { Typography } from 'antd';

// const { Text } = Typography;

// function LoginCard() {
//   const [values, setValues] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});

//   const handleInputValue = (e) => {
//     setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your validation logic here
//     if (!values.email) {
//       setErrors({ email: 'Email is required' });
//     } else {
//       console.log('Form submitted', values);
//       setErrors({});
//     }
//   };

//   return (
//     <MDBContainer fluid className='p-4'>
//       <form onSubmit={handleSubmit}>
//         <MDBRow>
//           <MDBCol md='6'>
//             <MDBCard>
//               <MDBCardBody>
//                 <MDBInput 
//                   onChange={handleInputValue} 
//                   name='email' 
//                   label='Email' 
//                   type='email' 
//                 />
//                 {errors.email && <Text type="danger">{errors.email}</Text>}
//                 <MDBInput 
//                   onChange={handleInputValue} 
//                   name='password' 
//                   label='Password' 
//                   type='password' 
//                 />
//                 <MDBBtn type='submit'>Login</MDBBtn>
//                 <div className="text-center mt-3">
//                   <p>
//                     New to our app? <Link to="/register">Register Now</Link>
//                   </p>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </form>
//     </MDBContainer>
//   );
// }

// export default LoginCard;


// // export default AppLoginCard;








//   // return (
//   //   <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
//   //     <form onSubmit={handleSubmit}>
//   //       <MDBRow>
//   //         <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
//   //           <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: "#000" }}>
//   //             Login to Your Account
//   //           </h1>
//   //         </MDBCol>
//   //         <MDBCol md='6' className='position-relative'>
//   //           <MDBCard className='my-5 bg-glass'>
//   //             <MDBCardBody className='p-5'>
//   //               <MDBInput onChange={handleInputValue} name='email' label='Email' wrapperClass='mb-1' type='email' />
//   //               <MDBInput onChange={handleInputValue} name='password' label='Password' wrapperClass='mb-1' type='password' />
//   //               <MDBBtn type='submit' className='w-100 mb-4' size='md'>LOGIN</MDBBtn>
//   //             </MDBCardBody>
//   //           </MDBCard>
//   //         </MDBCol>
//   //       </MDBRow>
//   //     </form>
//   //   </MDBContainer>
//   // );
// // }

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
  // MDBCheckbox,
}
  from 'mdb-react-ui-kit';
import validation from './loginValidation';
import { Typography } from 'antd';

const { Text } = Typography;

function AppLoginCard() {
  console.log('Rendering LoginCard component');
  const [values, setvalues] = useState({
    email: '',
    password: ''
  })

  const handleInputValue = (e) => {
    setvalues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    console.log(values);
  }

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
                  <MDBInput onChange={handleInputValue} name='email' label='Email' wrapperClass='mb-1' id='form3' type='email' />
                  {errors.email !== null && <Text type="danger">{errors.email}</Text>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <MDBInput onChange={handleInputValue} name='password' wrapperClass='mb-1' label='Password' id='form4' type='password' />
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