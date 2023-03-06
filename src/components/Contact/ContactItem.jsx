import { LiStyled, BtnStyled } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';

export default function ContactItem({ id, number, name }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <LiStyled key={id} id={id}>
      {name}: {number}
      <BtnStyled type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </BtnStyled>
    </LiStyled>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};