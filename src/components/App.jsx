import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// import Message from 'components/Message/Message';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slise';

export const App = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
      {/* {filterContacts.length > 0 ? (
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message text="Contact list is empty." />
      )} */}
    </div>
  );
};
