import { useDispatch, useSelector } from 'react-redux';
import s from '../Contacts/Contacts.module.css';
import * as actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

export default function ContactsSearch() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.wrapper}>
      <input
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={event =>
          dispatch(actions.changeFilter(event.target.value.toLowerCase()))
        }
      />
    </label>
  );
}
