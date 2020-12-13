// Vendors
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Components
import CriticalErrorsBoundary from '../CriticalErrorsBoundary';
import {
  UserAddForm, UsersControlPanel, UserEditForm, usersActions,
} from '../../users';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.getAllUsers());
  }, []);

  return (
    <CriticalErrorsBoundary>
      <Router>
        <Switch>
          <Route path="/users/add" component={UserAddForm} />
          <Route path="/users/edit/:userID" component={UserEditForm} exact />
          <Route path="/users/:offset" component={UsersControlPanel} />
          <Redirect to="/users/1" />
        </Switch>
      </Router>
    </CriticalErrorsBoundary>
  );
};

export default App;
