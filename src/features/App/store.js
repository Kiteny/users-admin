import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../users/_usersSlice_';

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
