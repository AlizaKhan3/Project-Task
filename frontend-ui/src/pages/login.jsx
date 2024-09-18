import * as React from 'react';
import CardComponent from '../components/card';
import "../App.css";

function LoginCard() {
  const fields = [
    { label: 'Email', type: 'text' },
    { label: 'Password', type: 'password' },
  ];

  const buttonAction = () => {
    console.log('Login button clicked');
  };

  return (
    <CardComponent
      title="Login"
      subtitle="Enter your credentials"
      fields={fields}
      buttonLabel="Login"
      buttonAction={buttonAction}
    />
  );
}

export default LoginCard;