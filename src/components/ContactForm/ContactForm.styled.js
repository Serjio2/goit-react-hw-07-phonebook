import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;

  p {
    margin-bottom: 5px;
  }

  label {
    margin-top: -5px;
  }

  span {
    color: red;
    margin-left: 5px;
  }

  button {
    width: 120px;
    margin: 15px auto;
  }
`;

export const StyledInput = styled(Field)`
  width: 200px;
  height: 40px;
`;

