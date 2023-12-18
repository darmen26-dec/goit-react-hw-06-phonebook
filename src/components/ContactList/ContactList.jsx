import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filterStatus = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus.status.toLowerCase())
  );

  return (
    <div className={css.contacts}>
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => (
          <li className={css.contactsItem} key={contact.id}>
            <p className={css.contactsName}>{contact.name}</p>
            <p className={css.contactsNumber}>{contact.number}</p>
            <button
              className={css.contactsBtn}
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
