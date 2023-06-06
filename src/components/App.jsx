// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import Message from 'components/Message/Message';
// import css from './App.module.css';

// export default function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   const addContact = ({ name, number }) => {
//     const newContact = { id: nanoid(), name, number };

//     contacts.some(contact => contact.name === name)
//       ? Report.warning(
//           `${name}`,
//           'This user is already in the contact list.',
//           'OK'
//         )
//       : setContacts(prevContacts => [newContact, ...prevContacts]);
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const changeFilter = e => setFilter(e.currentTarget.value);

//   const filterContacts = contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );

//   useEffect(() => {
//     const storedContacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(storedContacts);

//     if (parsedContacts) {
//       setContacts(parsedContacts);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className={css.wrapper}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />

//       <h2 className={css.subtitle}>Contacts</h2>
//       <Filter filter={filter} changeFilter={changeFilter} />
//       {filterContacts.length > 0 ? (
//         <ContactList
//           contacts={filterContacts}
//           onDeleteContact={deleteContact}
//         />
//       ) : (
//         <Message text="Contact list is empty." />
//       )}
//     </div>
//   );
// }

// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from './actions';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Message from 'components/Message/Message';
import css from './App.module.css';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter filter={filter} changeFilter={handleFilterChange} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </div>
  );
}
