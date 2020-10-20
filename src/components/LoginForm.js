import React, {useState, useEffect} from 'react'
import {CardStyle, ListingStyle, FormStyle} from '../styles/OtherStyles'
import VRGoggles from '../assets/vr-glasses.png'
import {Link} from 'react-router-dom'

// REMOVE <BR /> TAGS WHEN YOU GET TO STYLING

const initialFormValues = {
  username: '',
  password: ''
};

const initialErrors = {
  username: '',
  password: ''
};

const onSubmit = (event) => {
  event.preventDefault();
};

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);

  return (
    <ListingStyle>
      <CardStyle>
        <FormStyle onSubmit={onSubmit}>
          <img src={VRGoggles} alt='Person wearing a VR Headset' />
          <h2>Login</h2>
          <input 
            type='text'
            name='email'
            placeholder='Enter your email'
          />
          <input 
            type='password'
            name='password'
            placeholder='Enter your password'
          />
          <button>Login</button>
          <Link to='/'><button>Not Registered? Sign Up</button></Link>
        </FormStyle>
      </CardStyle>
    </ListingStyle>
  )
};