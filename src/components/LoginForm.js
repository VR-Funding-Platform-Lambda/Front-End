import React, {useState, useEffect} from 'react'
import {CardStyle, ListingStyle, FormStyle} from '../styles/OtherStyles'
import VRGoggles from '../assets/vr-glasses.png'
import {Link} from 'react-router-dom'
import * as yup from 'yup'
import loginSchema from '../validation/LoginSchema'


const initialFormValues = {
  email: '',
  password: ''
};

const initialErrors = {
  email: '',
  password: ''
};

export default function Login() {
  const [user, setUser] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true)

  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    setUser([...user, newUser])
    setFormValues(initialFormValues)
    console.log(user)
  };

  const change = (event) => {
    const {name, value} = event.target
    const inputChange = (name, value) => {
      yup.reach(loginSchema, name).validate(value)
        .then(() => {
          setErrors({...errors, [name]: ""})
        })
        .catch((err) => {
          setErrors({...errors, [name]: err.errors[0]})
          console.log(err.errors[0])
        })
      setFormValues({...formValues, [name]: value})
    }
    inputChange(name, value)
  }

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <ListingStyle>
      <CardStyle>
        <FormStyle onSubmit={onSubmit}>
          <img src={VRGoggles} alt='Person wearing a VR Headset' />
          <h2>Login</h2>
          <input 
            type='email'
            name='email'
            placeholder='Enter your email'
            value={formValues.email}
            onChange={change}
          />
          <input 
            type='password'
            name='password'
            placeholder='Enter your password'
            value={formValues.password}
            onChange={change}
          />

          <button disabled={disabled}>Login</button>
          <Link to='/'><button>Not Registered? <br />Sign Up</button></Link>
          <div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
          </div>
        </FormStyle>
      </CardStyle>
    </ListingStyle>

  )
};