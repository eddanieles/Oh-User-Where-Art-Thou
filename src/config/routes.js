import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';
import NewUser from '../components/NewUser'
import CreateUser from '../components/CreateUser';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="/newUser" component={NewUser}/>
      <Route path="/signup" component={CreateUser}/>
    </Route>
  </Router>
)
export default router;
