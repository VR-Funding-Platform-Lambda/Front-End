import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import LoginForm from './Components/LoginForm'
import SignUpForm from './Components/SignupForm';



  class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
                       
                <NavLink to="/sign-in">Sign In</NavLink>
                <NavLink exact to="/" >Sign Up</NavLink>
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
