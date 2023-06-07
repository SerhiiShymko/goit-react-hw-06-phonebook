import { addContact, deleteContact, setFilter } from '../redux/actions';

const tasksInitialState = [];

export const tasksReducer = createReducer(tasksInitialState, {
  [addContact]: (state, action) => {},
  [deleteContact]: (state, action) => {},
  [setFilter]: (state, action) => {},
});
