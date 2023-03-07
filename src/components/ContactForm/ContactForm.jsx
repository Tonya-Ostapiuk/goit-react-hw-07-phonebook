import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/contactThunk';
import { selectContacts } from 'redux/selectors';
import { FormStyled, LabelStyled, InputStyled, BtnStyled } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        alert('Error');
    }
  };

  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { id: nanoid(), name, number };

    const findContact = contacts.find(
      newContact => newContact.name.toLowerCase() === name.toLowerCase()
    );

    findContact
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContacts(newContact));
      setName('');
      setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Name
        <InputStyled
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </LabelStyled>
      <LabelStyled>
        Number
        <InputStyled
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </LabelStyled>
      <BtnStyled type="submit">Add contact</BtnStyled>
    </FormStyled>
  );
};