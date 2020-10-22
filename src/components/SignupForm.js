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
              <img className="visual" src="https://media2.giphy.com/media/26FPAn6hPp6Fqx7qw/giphy.gif?cid=ecf05e476b1wz1xxmozxt8rnci5wz2s5cafgj4fggmqi8ery&rid=giphy.gif" alt="VR"></img>
              <img className="visual" src="https://media1.giphy.com/media/3o7buctdzCPP4d7ZMk/giphy.gif?cid=ecf05e47htcg71bogfk89j5l1l7ed4wjgpxc3gfd89j6ux88&rid=giphy.gif" alt="VR2"></img>
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





