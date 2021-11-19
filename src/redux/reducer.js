import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';
import { fetchContacts, addContact, delContact } from './operations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [delContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [delContact.rejected]: (_, action) => action.payload,
  [delContact.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  filter,
  error,
});
