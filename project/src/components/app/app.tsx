import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import NotFound from '../not-found/not-found';
import Main from '../pages/main/main';
import Favorite from '../pages/favorites/favorites';
import Login from '../pages/login/login';
import Room from '../pages/room/room';
import browserHistory from '../../browser-history';
import ServerUnavailable from '../server-unavailable/server-unavailable';
import PrivateRoute from '../private-route/private-route';
import {useSelector} from 'react-redux';
import {selectIsDataLoadedAuth} from '../../store/reducers/auth/selectors';
import Loading from '../loading/loading';

function App(): JSX.Element {
  const getIsAuthLoaded = useSelector(selectIsDataLoadedAuth);

  if (!getIsAuthLoaded) {
    return <Loading/>;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main />
        </Route>
        <Route
          path={AppRoute.Login}
          exact
          component={Login}
        />
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={()=>(<Favorite />)}
        />
        <Route path={AppRoute.Room} exact>
          <Room />
        </Route>
        <Route
          exact
          path={AppRoute.Unavailable}
        >
          <ServerUnavailable/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
