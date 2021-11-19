// import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <nav className={s.nav}>
      <avatar />

      <button type="button">Logout</button>
    </nav>
  );
}
