import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {CardStyle, ListingStyle, FormStyle} from '../styles/OtherStyles'

const initialState = {
  email: '',
  password: '',
  name: '',
  checked: false,
  nameError: '',
  emailError: '',
  passwordError:''
}

class SignUpForm extends Component {

  state = initialState;

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: '',
      checked: false,
      nameError: '',
      emailError: '',
      passwordError: ''
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
 
  validate = () => {
    let nameError = ''
      let emailError = ''
    let passwordError = ''
    
    if (!this.state.name) {
      nameError = 'name can not be blank!'
    }

    if (!this.state.email.includes('@')) {
      emailError='invalid email!'
    }

    if (!this.state.password.includes('*'||'@'||'$')) {
    passwordError='password needs a special character!'  
    }


    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError })
      return false;
    }
    return true
  }
  
  submit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //this will clear the form
      this.setState(initialState)
    }
  }


    render() {
      return (
        <ListingStyle>
          <CardStyle>
            <FormStyle onSubmit={this.submit}>
                            <img src="https://media1.giphy.com/media/3o7buctdzCPP4d7ZMk/giphy.gif?cid=ecf05e47htcg71bogfk89j5l1l7ed4wjgpxc3gfd89j6ux88&rid=giphy.gif" alt="VR2"></img>
              <div >
                <h2>Sign Up!</h2>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter a Full Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.change} />
                <div style={{fontSize:12,color:'yellow'}}>{this.state.nameError}</div>
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
                <div style={{fontSize:12,color:'yellow'}}>{this.state.passwordError}</div>
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
                <div style={{fontSize:12,color:'yellow'}}>{this.state.emailError}</div>
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    name="checked"
                    value={this.state.hasAgreed}
                    onChange={this.change} />
                  <div style={{fontSize:15}}> I agree to the terms and conditions.</div>
                
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





