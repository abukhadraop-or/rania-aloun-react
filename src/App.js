import "./App.css";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
