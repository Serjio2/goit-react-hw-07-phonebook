import { nanoid } from 'nanoid';
import { StyledContactList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.value);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <li key={nanoid()}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </StyledContactList>
  );
};
