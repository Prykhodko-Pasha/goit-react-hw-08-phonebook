import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        exact
        className={s.nav__link}
        activeClassName={s.nav__link_active}
      >
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        className={s.nav__link}
        activeClassName={s.nav__link_active}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
