import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
