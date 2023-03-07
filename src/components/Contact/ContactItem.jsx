import { LiStyled, BtnStyled } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contactThunk';

export default function ContactItem({ id, number, name }) {
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContacts(id));

  return (
    <LiStyled key={id} id={id}>
      {name}: {number}
      <BtnStyled type="button" onClick={onDeleteContact}>
        Delete
      </BtnStyled>
    </LiStyled>
  );
}
