import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/register"
        exact
        className={s.nav__link}
        activeClassName={s.nav__link_active}
      >
        Sign in
      </NavLink>

      <NavLink
        to="/login"
        className={s.nav__link}
        activeClassName={s.nav__link_active}
      >
        Login
      </NavLink>
    </nav>
  );
}
