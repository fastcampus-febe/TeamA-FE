import { atom } from 'recoil';
import { getItem } from 'utils/storage';

export const authState = atom({
  key: 'authState',
  default: {
    isLoggedIn: getItem('token') ? true : false,
    loggedUser: getItem('user', {}),
    userToken: getItem('token'),
  },
});
