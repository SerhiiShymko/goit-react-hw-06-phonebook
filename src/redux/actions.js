export const addContact = contact => {
  return {
    type: 'ADD_CONTACT',
    payload: contact,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'DELETE_CONTACT',
    payload: contactId,
  };
};

export const setFilter = filterValue => {
  return {
    type: 'SET_FILTER',
    payload: filterValue,
  };
};
