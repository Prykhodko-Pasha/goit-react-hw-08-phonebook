import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Form.module.css';
import * as operations from '../../redux/operations';
import { getEntities } from '../../redux/selectors';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const items = useSelector(getEntities);
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const isContactExist = items.filter(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (isContactExist.length === 0) {
      dispatch(operations.addContact({ name, phone }));
    } else {
      alert(`${name} is already in contacts.`);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          name="phone"
          placeholder="Number"
          value={phone}
          onChange={onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={s.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
