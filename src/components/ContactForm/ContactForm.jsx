import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledInput } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

const schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
});

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const allcontacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmitForm = (value, actions) => {
    if (allcontacts.find(contact => contact.name === value.name)) {
      return alert(`${value.name} is already in contacts`);
    }
    
    if (allcontacts.find(contact => contact.phone === value.phone)) {
      return alert(`${value.phone} is already in contacts`);
    }

    dispatch(addContact({ ...value}));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmitForm}
    >
      <StyledForm>
        <label>
          <p>Name:</p>
          <StyledInput type="text" name="name" placeholder="Input name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label>
          <p>Number:</p>
          <StyledInput type="tel" name="phone" placeholder="Input number" />
          <ErrorMessage name="phone" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
