import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import NotFound from './NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Home} exact path="/"/>
      <Route component={Login} exact path="/login"/>
      <Route component={Register} exact path="/register"/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

export default Routes;