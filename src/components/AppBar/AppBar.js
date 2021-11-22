import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <ul className={s.app_bar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </ul>
  );
}
