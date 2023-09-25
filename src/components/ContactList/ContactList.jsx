import { StyledContactList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getAllContacts } from 'redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.value);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </StyledContactList>
  );
};
