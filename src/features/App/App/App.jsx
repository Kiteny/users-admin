import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { UserAddForm, UsersControlPanel } from '../../users';
import './App.css';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" component={UsersControlPanel} exact />
        <Route path="/add" component={UserAddForm} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </div>
);

export default App;
