import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// REMOVE <BR /> TAGS WHEN YOU GET TO STYLING

const initialFormValues = {
  username: '',
  password: ''
}
const initialErrors = {
  username: '',
  password: ''
}

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrors)

  return (
    <div>
      <form>
        <h2>Login</h2>
        <label>
          <input 
            type='text'
            name='username'
            placeholder='username'
          />
        </label><br />
        <label>
          <input 
            type='text'
            name='password'
            placeholder='password'
          />
        </label><br />
        <button>Login</button><br />
        <Link to="/">Not Registered? Sign Up</Link>
      </form>
    </div>
  )
}