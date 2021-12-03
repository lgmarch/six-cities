import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token';
import {AppRoute, BACKEND_URL, HttpCode, REQUEST_TIMEOUT} from '../constants/constants';
import browserHistory from '../browser-history';

type UnauthorizedCallback = () => void;

export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }

      if(response?.status === HttpCode.NotFound) {
        browserHistory.push(AppRoute.NotFound);
      }

      if(response?.status === HttpCode.Unavailable) {
        browserHistory.push(AppRoute.Unavailable);
      }

      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};
