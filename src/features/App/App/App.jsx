import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import {
  UserAddForm, UsersControlPanel, UserEditForm, usersActions,
} from '../../users';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.getAllUsers());
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/users/:offset" component={UsersControlPanel} />
          <Route path="/users/add" component={UserAddForm} />
          <Route path="/users/edit/:userID" component={UserEditForm} exact />
          <Redirect to="/users/1" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
