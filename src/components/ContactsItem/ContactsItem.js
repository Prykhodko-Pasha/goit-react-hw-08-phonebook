import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from '../Contacts/Contacts.module.css';
import * as operations from '../../redux/operations';

export default function ContactsItem({ id, name, phone }) {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {phone}
      </p>
      <button
        className={s.del__btn}
        type="button"
        onClick={() => dispatch(operations.delContact(id))}
      >
        Delete
      </button>
    </>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
