import { DivStyled, InputStyled, LabelStyled } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilter } from '../../redux/slice';

export const Filter = () => {
  const filter = useSelector(getFilter);
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
