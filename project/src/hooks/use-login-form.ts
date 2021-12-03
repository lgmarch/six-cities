import {useReducer} from 'react';
import {InputError} from '../constants/constants';

type StateType = {
  email: string,
  isEmailError: boolean,
  helperTextEmail: string,
  password:  string,
  isPasswordError: boolean,
  helperTextPassword: string,
};

const initialState: StateType = {
  email: '',
  isEmailError: true,
  helperTextEmail: '',
  password: '',
  isPasswordError: true,
  helperTextPassword: '',
};

export enum ActionType {
  SetEmailAction = 'setEmail',
  SetPasswordAction = 'setPassword',
}

type Action =
  | { type: ActionType.SetEmailAction, email: string, isEmailError: boolean, helperTextEmail: string}
  | { type: ActionType.SetPasswordAction, password: string, isPasswordError: boolean, helperTextPassword: string};

const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case ActionType.SetEmailAction:
      return {
        ...state,
        email: action.email,
        isEmailError: action.isEmailError,
        helperTextEmail: action.helperTextEmail,
      };
    case ActionType.SetPasswordAction:
      return {
        ...state,
        password: action.password,
        isPasswordError: action.isPasswordError,
        helperTextPassword: action.helperTextPassword,
      };
    default:
      throw new Error();
  }
};

type ResultLoginForm = [(email: string)=>void, (password: string)=>void, StateType];

export const useLoginForm = (): ResultLoginForm => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkEmail = (email: string) => {
    const re = /^[0-9a-zA-Z.+_]+@[/-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,}$/;

    if (!re.test(email)) {
      const str = InputError.EmailError;
      return {
        message: str,
        isEmailErr: true,
      };
    }
    return {
      message: '',
      isEmailErr: false,
    };
  };

  const handleEmailChange = (email: string) => {
    dispatch({
      type: ActionType.SetEmailAction,
      email: email,
      isEmailError: checkEmail(email).isEmailErr,
      helperTextEmail: checkEmail(email).message,
    });
  };

  const checkPassword = (password: string) => {
    const re = /[a-zA-Z0-9]/;

    if (!re.test(password.trim()) || password.trim().length === 0) {
      const str = InputError.PasswordError;
      return {
        message: str,
        isPasswordErr: true,
      };
    }
    return {
      message: '',
      isPasswordErr: false,
    };
  };

  const handlePasswordChange = (password: string) => {
    dispatch({
      type: ActionType.SetPasswordAction,
      password: password,
      isPasswordError: checkPassword(password).isPasswordErr,
      helperTextPassword: checkPassword(password).message,
    });
  };

  return [handleEmailChange, handlePasswordChange, state];
};
