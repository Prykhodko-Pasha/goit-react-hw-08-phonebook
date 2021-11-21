import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <ul className={s.app_bar}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </ul>
  );
}
