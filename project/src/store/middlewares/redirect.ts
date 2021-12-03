import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {ActionType} from '../../types/action-type';
import {RootState} from '../root-reducer';

export const redirect: Middleware<unknown, RootState> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
