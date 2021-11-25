import { useSelector } from 'react-redux';
import s from './Contacts.module.css';
import ContactsItem from '../ContactsItem/ContactsItem';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={s.contacts__list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contacts__item}>
          <ContactsItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
