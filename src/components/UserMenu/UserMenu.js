import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

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
      children:
        name.split(' ').length === 1
          ? `${name[0]}`
          : `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className={s.user_menu}>
      <Avatar {...stringAvatar(name)} className={s.user_menu__avatar} />
      <span className={s.user_menu__greeting}>Hello, {name}!</span>
      <Button
        className={s.user_menu__button}
        variant="outlined"
        color="error"
        onClick={() => dispatch(authOperations.logout())}
      >
        Logout
      </Button>
    </div>
  );
}
