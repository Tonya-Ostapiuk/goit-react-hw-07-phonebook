import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/slice';
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

  const contacts = useSelector(state => state.contacts);

  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  // };

  // const handleSubmit = e => {
  //   const id = nanoid();
  //   const name = e.name;
  //   const number = e.number;
  //   const contactsLists = [...contacts];

  //   if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     contactsLists.push({ name, id, number} );
  //   }
  //   dispatch(addContact({contactsLists}));
  //   // setContacts( contactsLists );
  // };


  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { id: nanoid(), name, number };

    const findContact = contacts.find(
      newContact => newContact.name.toLowerCase() === name.toLowerCase()
    );

    findContact
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
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