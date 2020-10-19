import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddProj from './AddProj'
import FundProj from './FundProj'



function Dash() {
  return (
    <div className="Dash">
        <h1> Would you like to...?</h1>
        <Router>
        <Route exact path="/AddProj" component={AddProj} /> 
        <Link to="/AddProj" className='button'>
            <button className='button' type="button">
                Add a Project       
            </button>
          </Link> 
    <Route exact path="/FundProj" component={FundProj} />
    <Link to="/FundProj" className='button'>
            <button className='button' type="button">
                Fund a Project      
            </button>
          </Link>
    </Router>
    </div>
  );
}

export default Dash;
