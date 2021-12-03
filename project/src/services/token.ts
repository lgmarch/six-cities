import {AUTH_TOKEN_KEY_NAME} from '../constants/constants';

export type Token = string;

export const getToken = (): Token => {
  let token;

  try {
    token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    return token ?? '';
  }
  catch (e) {
    throw new Error('token receipt error');
  }
};

export const saveToken = (token: Token): void => {
  try {
    localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  }
  catch (e) {
    throw new Error('token saving error');
  }
};

export const dropToken = (): void => {
  try {
    localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  }
  catch (e) {
    throw new Error('token deletion error');
  }
};
