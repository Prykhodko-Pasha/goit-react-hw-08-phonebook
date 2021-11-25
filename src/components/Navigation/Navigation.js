import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? s.nav__link_active : s.nav__link
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? s.nav__link_active : s.nav__link
        }
      >
        Contacts
      </NavLink>
    </nav>
  );
}
