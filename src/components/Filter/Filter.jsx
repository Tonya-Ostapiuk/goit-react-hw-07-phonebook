import { DivStyled, InputStyled, LabelStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = query => dispatch(filterContacts(query));

  const changeValue = e => changeFilter(e.target.value);

  return (
    <DivStyled>
      <LabelStyled>
        Find contacts by Name
        <InputStyled
          type="text"
          name="filter"
          required
          value={filter}
          onChange={changeValue}
        />
      </LabelStyled>
    </DivStyled>
  );
};
