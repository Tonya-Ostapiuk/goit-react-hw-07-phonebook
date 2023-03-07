import { WraperStyled } from './ContactList.styled';
import ContactItem from '../Contact/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { getContact } from '../../redux/contacts/contactSlice';
import { fetchContacts } from '../../redux/contacts/contactThunk';

export const ContactList = () => {
  // const contacts = useSelector(state => state.contacts);
  const {contacts, status, error} = useSelector(state => state.contacts);
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if ( status === 'pending' ) {
    return <h2>Louding</h2>
  }

  if ( status === 'fulfilled' ){
    return (
      <WraperStyled>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </WraperStyled>
    );
  };

  if ( status === 'fulfilled' ){
    return <h2>ERROR</h2>
  }

 
};
