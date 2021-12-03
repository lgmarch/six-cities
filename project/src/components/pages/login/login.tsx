import HeaderLogo from '../../header-logo/header-logo';
import LocationItem from '../../location-item/location-item';
import LoginForm from '../../forms/login-form/login-form';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus, CityName} from '../../../constants/constants';
import { Redirect } from 'react-router-dom';
import {selectAuthStatus, selectErrorAuth} from '../../../store/reducers/auth/selectors';
import {showingError} from '../../../utils/showing-error';
import {setErrorFavorites} from '../../../store/action';

function Login(): JSX.Element {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const error = useSelector(selectErrorAuth);

  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <Redirect to={AppRoute.Main} />
    );
  }

  if (Object.keys(error).length) {
    showingError(error);
    dispatch(setErrorFavorites(''));
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />

          <section className="locations locations--login locations--current">
            <LocationItem
              locationName={CityName.Amsterdam}
            />
          </section>

        </div>
      </main>
    </div>
  );
}

export default Login;
