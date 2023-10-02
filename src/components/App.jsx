import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { Container } from './Form/Form.styled';

export class App extends Component {
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
    filter: '',
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contact);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }



  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleDelete = ({ target }) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        el => !el.id.includes(target.parentElement.id)
      ),
    }));
  };
  addContact = user => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  };



  render() {
    const filterArray = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Container>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact} contacts={this.state.contacts} />
        <h2>Contacts </h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <ContactList
          filterArray={filterArray}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}