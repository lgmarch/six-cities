import {ChangeEvent, FormEvent} from 'react';
import {AuthType} from '../../../types/auth-type';
import {logInUser} from '../../../services/api-actions';
import {useDispatch} from 'react-redux';
import {useLoginForm} from '../../../hooks/use-login-form';

function LoginForm(): JSX.Element {
  const dispatch = useDispatch();
  const [handleEmailChange, handlePasswordChange, state] = useLoginForm();

  const onSubmit = (authData: AuthType) => {
    dispatch(logInUser(authData));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!state.isPasswordError && !state.isEmailError) {
      onSubmit({
        email: state.email,
        password: state.password,
      });
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" onSubmit={handleFormSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label htmlFor="email" className="visually-hidden">Email</label>
          <input
            data-testid="email"
            className="login__input form__input"
            id="email"
            type="text"
            placeholder="Email"
            onChange={({target}: ChangeEvent<HTMLInputElement>) => {
              handleEmailChange(target.value);
            }}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label htmlFor="password" className="visually-hidden">Password</label>
          <input
            data-testid="password"
            className="login__input form__input"
            id="password"
            type="password"
            placeholder="Password"
            onChange={({target}: ChangeEvent<HTMLInputElement>) => {
              handlePasswordChange(target.value);
            }}
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={state.isPasswordError || state.isEmailError}
        >
          Sign in
        </button>
        <div>
          {state.isEmailError && (<span style={{color: 'red'}}>{state.helperTextEmail}</span>)}
          {!state.isEmailError && (<span style={{color: 'green'}}>{state.helperTextEmail}</span>)}
        </div>
        <div>
          {state.isPasswordError && (<span style={{color: 'red'}}>{state.helperTextPassword}</span>)}
          {!state.isPasswordError && (<span style={{color: 'green'}}>{state.helperTextPassword}</span>)}
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
