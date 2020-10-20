import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('Form is submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div >
            <form onSubmit={this.handleSubmit}>
              <div >
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter a Full Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="email">E-Mail Address</label>
                <input
                  type="email"
                  id="email" 
                  placeholder="Enter an Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange} />
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    name="hasAgreed"
                    value={this.state.hasAgreed}
                    onChange={this.handleChange} />
                    I agree to all statements in terms of service
                </label>
              </div>

              <div>
                  <button>Sign Up</button> <Link to="/sign-in">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
