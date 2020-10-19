import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignupForm';
import {HeaderStyle} from './styles/OtherStyles'



  class App extends Component {
    render() {
      return (
        <Router basename="/react-auth-ui/">
          <div className="App">
            <div className="App__Aside"></div>
            <div className="App__Form">
              <HeaderStyle className="PageSwitcher">
                <a href='https://keen-tereshkova-146593.netlify.app/#'>Home Page</a>
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </HeaderStyle>
              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={LoginForm}>
              </Route>
            </div>
  
          </div>
        </Router>
      );
    }
  }

  
  export default App;
