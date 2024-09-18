import * as React from 'react';
import CardComponent from '../../components/card';
import "./signup.css";

function SignupCard() {
  const fields = [
    { label: 'Email', type: 'text' },
    { label: 'Password', type: 'password' },
    { label: 'Phone Number', type: 'text' },
    { label: 'Country', type: 'select' },
    { label: 'Location', type: 'text' }, // added location field
  ];

  const countryOptions = [
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Mexico', value: 'Mexico' },
  ];

  const buttonAction = () => {
    console.log('Signup button clicked');
  };

  return (
    <div className="card-container">
      {/* <div className="card"> */}
      <CardComponent
        title="Signup"
        subtitle="Create an account"
        fields={fields}
        buttonLabel="Signup"
        buttonAction={buttonAction}
        countryOptions={countryOptions}
      />
      {/* </div> */}
    </div>
  );
}

export default SignupCard;