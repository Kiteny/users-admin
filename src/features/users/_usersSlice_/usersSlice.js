/* eslint-disable no-param-reassign */
import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';

import usersAPI from '../../../api/local/usersAPI';
import { ROLES, SELECTION } from './constants';

const usersEntityAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.fio.localeCompare(b.fio),
});

const usersSlice = createSlice({
  name: 'users',
  initialState: usersEntityAdapter.getInitialState({
    currentRole: 'Все',
    selection: SELECTION,
    roles: ROLES,
  }),
  reducers: {
    addUser(_, { payload }) {
      const {
        fio, email, phone, password, role,
      } = payload;
      usersAPI.addUser(fio, email, phone, password, role);
    },
    getAllUsers(state) {
      usersEntityAdapter.removeAll(state);
      usersEntityAdapter.addMany(state, usersAPI.getAllUsers());
      state.currentRole = 'Все';
    },
    getFilteredUsers(state, { payload }) {
      const { field, value } = payload;

      if (field === 'role') {
        state.currentRole = value;
      }

      usersEntityAdapter.removeAll(state);
      usersEntityAdapter.addMany(state, usersAPI.getAllUsers((user) => user[field] === value));
    },
    deleteUser(state, { payload: id }) {
      usersEntityAdapter.removeOne(state, id);
      usersAPI.deleteUser(id);
    },
    editUser(state, { payload }) {
      const now = new Date().toISOString();
      usersEntityAdapter.upsertOne(state, { ...payload, dateLastEdit: now });
      usersAPI.editUser(payload);
    },
    search(state, { payload }) {
      const ids = state.ids.filter((id) => {
        const user = state.entities[id];
        if (user.email.includes(payload) || user.phone.includes(payload)) {
          return false;
        }
        return true;
      });
      usersEntityAdapter.removeMany(state, ids);
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
  selectTotal: selectUsersTotal,
} = usersEntityAdapter.getSelectors((state) => state.users);

export const selectUsersIdsByOffset = createSelector(
  selectUsersIds,
  (state) => state.users.selection,
  (_, offset) => offset,
  (ids, selection, offset) => {
    const start = selection * offset - selection;
    const end = start + selection;

    const selectedIds = ids.slice(start, end);

    return selectedIds;
  },
);
