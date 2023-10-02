import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormContainer, Input, Text } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSub = e => {
    // створюю новий контакт та провевіряю чи він існує вже
    e.preventDefault();

    if (
      this.props.contacts.some(el =>
        el.name.toLowerCase().includes(this.state.name.toLowerCase())
      )
    ) {
      alert(`${this.state.name} is already contacts`);
      this.setState({
        name: '',
        number: '',
      });
      return;
    } else {
      const newContact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      };
      this.props.addContact(newContact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSub}>
        <FormContainer>
          <Text>
            Name
          </Text>
            <Input
              type="text"
              name="name"
              required
              onChange={this.handleChange}
              value={this.state.name} />
            
          <Text>
            Number </Text>
            <Input
              type="tel"
              name="number"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </form>
    );
  }
}