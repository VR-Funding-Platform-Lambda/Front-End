import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {CardStyle, ListingStyle, FormStyle} from '../styles/OtherStyles'



class SignUpForm extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      checked: false
    };
      
      
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
 
  
  submit(e) {
    e.preventDefault();
    console.log(this.state);
  
}


    render() {
      return (
        <ListingStyle>
          <CardStyle>
            <FormStyle onSubmit={this.submit}>
              <img src="https://media0.giphy.com/media/fo7R6EzlBljboCcICa/giphy.gif?cid=ecf05e470rv32olirqgwi9cfsu2nn56xe9ayhjz3achqv82a&rid=giphy.gif" alt="VR animation"></img>
              <div >
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter a Full Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.change} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.change} />
              </div>
              <div>
                <label htmlFor="email">E-Mail Address</label>
                <input
                  type="email"
                  id="email" 
                  placeholder="Enter an Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.change} />
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    name="checked"
                    value={this.state.hasAgreed}
                    onChange={this.change} />
                    I agree to all statements in terms of service
                </label>
              </div>

              
                  <button>Sign Up</button> <Link to="/sign-in">I'm already a member</Link>
              
            </FormStyle>
          </CardStyle>
          </ListingStyle>
          
        );
    }
}

export default SignUpForm;






// import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import * as yup from 'yup'
// import SignupSchema from '../validation/SignupSchema'
 
 
// const FormValues= {
// name:'', 
// email: '',
//   password: '',
// checkbox: false
// };
 
// const FormErrors= {
// name:'', 
//  email: '',
//   password: '',
// checkbox: false
// };
 
// export default function SignUp() {
//   const [user, setUser] = useState([])
//   const [SignupValues, setSignupValues] = useState(FormValues);
//   const [errors, setErrors] = useState(FormErrors);
//   const [disabled, setDisabled] = useState(true)
 
//   const onSubmit = (event) => {
//     event.preventDefault();
//     const newMember= {
// name:SignupValues.name,
//       email: SignupValues.email.trim(),
//       password: SignupValues.password.trim()
//     }
//     setUser([...user, newMember])
//     setSignupValues(FormValues)
//     console.log(user)
//   };
 
//   const change = (event) => {
//     const {name, value, checkbox} = event.target
//     const inputChange = (name, value) => {
//       yup.reach(SignupSchema, name).validate(value)
//         .then(() => {
//           setErrors({...errors, [name]: ""})
//         })
//         .catch((err) => {
//           setErrors({...errors, [name]: err.errors[0]})
//           console.log('You messed up!')
//         })
//       setSignupValues({...SignupValues, [name]: value})
//     }
//     inputChange(name, value)
//   }
 
//   useEffect(() => {
//     SignupSchema.isValid(SignupValues).then((valid) => {
//       setDisabled(!valid)
//     })
//   }, [SignupValues])
 
//   return (
//         <form onSubmit={onSubmit}>
//  <div>
//          <label htmlFor="name">Full Name</label>
//           <input 
//             type="name"
//             placeholder="Enter a Full Name"
//             name="name"
//             value={SignupValues.email}
//             onChange={change}
//         />
//       </div>
//       <div>
// <label htmlFor="password">Password</label>
 
//           <input 
//            type="password"
//                   placeholder="Enter a password"
//                   name="password"
 
//             value={SignupValues.password}
//             onChange={change}
//         />
//       </div>
      
//       <div>
//  <label htmlFor="email">E-Mail Address</label>
//                 <input
//                   type="email"
//                   placeholder="Enter an Email"
//                   name="email"
//  value={SignupValues.email}
//           onChange={change} />
//       </div>
//       <div>
 
// <label>
//                   <input
//                     type="checkbox"
//                     name="checkbox"
//                     value={SignupValues.checkbox}
//                     onChange={change} />
//                     I agree to all statements in terms of service
//                 </label>
//         </div>
 
//           <button disabled={disabled}>Sign Up</button>
//           <Link to="/sign-in"><button>Already a member? <br />Sign In</button></Link>
//           <div>
//             <div>{errors.email}</div>
//             <div>{errors.password}</div>
//           </div>
//         </form>
      
 
//   )
// };
