import { StyledContactList } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.value);
  const error = useSelector(state => state.contacts.error);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {contacts > 0 ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <StyledContactList>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
              <button onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </button>
            </li>
          ))}
        </StyledContactList>
      )}
    </>
  );
};
