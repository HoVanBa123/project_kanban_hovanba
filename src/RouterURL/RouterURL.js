import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Login from './../Component/Login'
import Signup from './../Component/Signup'

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </div>
        );
    }
}

export default RouterURL;