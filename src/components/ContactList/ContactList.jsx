import { ButtonDel, List, Item } from './ContactList.styled';

export const ContactList = ({ filterArray, handleDelete }) => (
  <List>
    {filterArray.map(({ name, number, id }, idx) => (
      <Item
        key={id}
        id={id}
      >
        {name}: {number}
        <ButtonDel onClick={handleDelete}> Delete</ButtonDel>
      </Item>
    ))}
  </List>
);