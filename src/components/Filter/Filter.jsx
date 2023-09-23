import { useDispatch, useSelector } from "react-redux";
import { StyledFilter } from "./Filter.styled";
import { contactsFilter } from "redux/filterSlice";

export const Filter = () => {

  const filteredName = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  return (
    <StyledFilter>
      <label>
        <span>Find contacts by name:</span>
        <input
          type="text"
          value={filteredName}
          onChange={e => dispatch(contactsFilter(e.currentTarget.value))}
        />
      </label>
    </StyledFilter>
  );
};
