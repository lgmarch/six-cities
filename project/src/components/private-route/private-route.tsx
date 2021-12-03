import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/constants';
import {useSelector} from 'react-redux';
import {History} from 'history';
import {selectAuthStatus} from '../../store/reducers/auth/selectors';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;

  const authStatus = useSelector(selectAuthStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps)=>(
        authStatus === AuthorizationStatus.Auth
          ? render(routeProps)
          : <Redirect to={AppRoute.Login}/>
      )}
    />
  );
}

export default PrivateRoute;
