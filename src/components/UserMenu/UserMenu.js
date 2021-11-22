import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';

import * as authOperations from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className={s.nav}>
      <Avatar {...stringAvatar(name)} />
      <span>Hello, {name}!</span>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </button>
    </div>
  );
}
