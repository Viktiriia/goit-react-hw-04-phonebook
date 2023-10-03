import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormContainer, Input, Text } from './Form.styled';

export default function Form({contacts, addContact}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const handleChange = (evt) => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        break;
    }
  };
 const handleSub = e => {
    e.preventDefault();

    if (
      contacts.some(el =>
        el.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      alert(`${name} is already contacts`);
      setName('');
      setNumber('');
      return;
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
    addContact(newContact);
      setName('');
      setNumber('');
    }
  };

 
    return (
      <form onSubmit={handleSub}>
        <FormContainer>
          <Text>
            Name
          </Text>
            <Input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={name} />
            
          <Text>
            Number </Text>
            <Input
              type="tel"
              name="number"
              required
              onChange={handleChange}
              value={number}
            />
          
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </form>
    );
  }
