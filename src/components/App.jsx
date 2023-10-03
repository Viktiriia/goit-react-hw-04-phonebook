import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import  Form  from './Form/Form';
import { Container } from './Form/Form.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts'))?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts',JSON.stringify(contacts))
  },[contacts]);
 
  const handleChange = evt => {
    setFilter(evt.currentTarget.value);
  };
  const handleDelete = ({ target }) => {
    setContacts(prevState => prevState.filter(
      el => !el.id.includes(target.parentElement.id)
    ))
  };

  const addContact = user => {
    setContacts([...contacts, user]);
  };

    const filterArray = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h2>Phonebook</h2>
        <Form addContact={addContact} contacts={contacts} />
        <h2>Contacts </h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList
          filterArray={filterArray}
          handleDelete={handleDelete}
        />
      </Container>
    );
  }
