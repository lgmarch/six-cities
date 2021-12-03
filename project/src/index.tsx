import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {createAPI} from './services/api';
import {setUserAuthStatus} from './store/action';
import {AuthorizationStatus} from './constants/constants';
import {checkAuthUser, fetchOffers} from './services/api-actions';
import {redirect} from './store/middlewares/redirect';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI(
  () => store.dispatch(setUserAuthStatus(AuthorizationStatus.NoAuth)),
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch)(checkAuthUser());
(store.dispatch)(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
