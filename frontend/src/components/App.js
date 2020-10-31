import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom"

import * as ROUTES from "../commons/routes"

import {HomePage} from "./Home/HomePage"
import LoginPage from "./Login/LoginPage"
import SignupPage from "./SignUp/SignUpPage"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={SignupPage} />
      </Router>

    );
  }
}

export default hot(module)(App);