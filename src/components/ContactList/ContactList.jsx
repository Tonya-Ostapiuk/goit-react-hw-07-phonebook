import { WraperStyled } from './ContactList.styled';
import ContactItem from '../Contact/ContactItem';
import { useSelector } from 'react-redux';
import { getContact } from '../../redux/slice';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  return (
    <WraperStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </WraperStyled>
  );
};
