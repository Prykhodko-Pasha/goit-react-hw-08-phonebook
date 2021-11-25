import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Section from '../Section/Section';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import ContactsSearch from '../ContactsSearch/ContactsSearch';
import Loader from '../Loader/Loader';

import s from '../Contacts/Contacts.module.css';
import {
  getEntities,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
import * as operations from '../../redux/contacts/contacts-operations';

export default function HomePage() {
  const items = useSelector(getEntities);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {isLoading ? (
          <Loader />
        ) : items.length > 0 ? (
          <>
            {items.length > 1 && <ContactsSearch />}
            <Contacts />
          </>
        ) : (
          <div className={s.wrapper}>
            <p className={s.text}>No contacts yet</p>
          </div>
        )}
      </Section>
    </>
  );
}
