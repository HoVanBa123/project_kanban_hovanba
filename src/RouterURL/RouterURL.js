import React, { Component } from 'react';
import {
    Route,
    Switch
  } from "react-router-dom";
import Login from '../Component/Login'
import Signup from '../Component/Signup'
import LoginSignup from '../Component/LoginSignup'

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LoginSignup}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;