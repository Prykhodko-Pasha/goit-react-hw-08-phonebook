import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? s.nav__link_active : s.nav__link
        }
      >
        Sign in
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? s.nav__link_active : s.nav__link
        }
      >
        Login
      </NavLink>
    </nav>
  );
}
