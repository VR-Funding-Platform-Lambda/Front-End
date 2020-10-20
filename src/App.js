import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignupForm';
import {HeaderStyle} from './styles/OtherStyles'



  class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
          <HeaderStyle className="PageSwitcher">
                <a href='https://keen-tereshkova-146593.netlify.app/#'>Home Page</a>         
                <NavLink to="/sign-in">Sign In</NavLink>
              <NavLink exact to="/" >Sign Up</NavLink>
              </HeaderStyle>
              </div>  
              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={LoginForm}>
              </Route>
            
  
        </Router>
      );
    }
  }

  
  export default App;
