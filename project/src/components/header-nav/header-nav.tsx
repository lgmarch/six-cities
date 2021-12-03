import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/constants';
import {fetchOffers, logOutUser} from '../../services/api-actions';
import {selectAuthStatus, selectUserEmail} from '../../store/reducers/auth/selectors';

function HeaderNav(): JSX.Element {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const email = useSelector(selectUserEmail);

  const handleUserLogout = () => {
    dispatch(logOutUser());
    dispatch(fetchOffers());
  };

  return(
    <nav className="header__nav">
      {authStatus === AuthorizationStatus.NoAuth ? (
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Login}>
              <span className="header__signout">Sign in</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
              data-testid='favorites'
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{email}</span>
            </Link>
          </li>
          <li className="header__nav-item" onClick={handleUserLogout}>
            <Link className="header__nav-link" to="/">
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default HeaderNav;
