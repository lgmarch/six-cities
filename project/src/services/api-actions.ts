import {ThunkActionResult} from '../types/action-type';
import {APIRoute, AppRoute, AUTH_FAIL_MESSAGE, DATA_LOADING_ERROR_MESSAGE, TypeOfError} from '../constants/constants';
import {
  setOffers,
  redirectToRoute,
  setUserData,
  setUserLogOut,
  setIsDataLoadedOffers,
  setOffer,
  setOffersNearBy,
  setCommentsOnTheOffer,
  setFavorites,
  changeStatusFavorite,
  setErrorAuth,
  setErrorOffers,
  setErrorOffer,
  setErrorFavorites,
  setErrorComments,
  setIsDataLoadedOffer,
  setIsDataLoadedFavorites,
  setIsDataLoadedComments, setIsDataLoadedAuth
} from '../store/action';
import {PlaceCardTypeBackend} from '../types/place-card-type';
import {dropToken, saveToken} from './token';
import {AuthType, AuthInfoTypeBackend} from '../types/auth-type';
import {toast} from 'react-toastify';
import {CommentPostType, CommentTypeBackend} from '../types/comment-type';

export const fetchOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setIsDataLoadedOffers(false));
    await api.get<PlaceCardTypeBackend[]>(APIRoute.Hotels)
      .then(({data}) => {
        dispatch(setOffers(data));
      })
      .catch(() => {
        dispatch(setErrorOffers(TypeOfError.ERROR_LOADING_OFFERS));
      });
  };

export const fetchOfferById = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setIsDataLoadedOffer(false));
    await api.get<PlaceCardTypeBackend>(`${APIRoute.Hotels}/${id}`)
      .then(({data}) => {
        dispatch(setOffer(data));
      })
      .catch(() => {
        dispatch(setErrorOffer(TypeOfError.ERROR_LOADING_OFFER));
      });
  };

export const fetchOffersNearBy = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setIsDataLoadedOffer(false));
    await api.get<PlaceCardTypeBackend[]>(`${APIRoute.Hotels}/${id}/nearby`)
      .then(({data}) => {
        dispatch(setOffersNearBy(data));
      })
      .catch(() => {
        dispatch(setErrorOffer(TypeOfError.ERROR_LOADING_OFFERS_NEAR_BY));
      });
  };

export const fetchFavorites = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setIsDataLoadedFavorites(false));
    await api.get<PlaceCardTypeBackend[]>(APIRoute.Favorite)
      .then(({data}) => {
        dispatch(setFavorites(data));
      })
      .catch(() => {
        dispatch(setErrorFavorites(TypeOfError.ERROR_LOADING_FAVORITES));
      });
  };

export const favoritesPost = (id: number, status: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<PlaceCardTypeBackend>(`${APIRoute.Favorite}/${id}/${status}`)
      .then(({data}) => {
        dispatch(changeStatusFavorite(data));
      })
      .catch(() => {
        dispatch(setErrorFavorites('DATA_LOADING_ERROR_MESSAGE'));
      });
  };

export const fetchCommentsOnTheOffer = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setIsDataLoadedComments(false));
    await api.get<CommentTypeBackend[]>(`${APIRoute.Comments}/${id}`)
      .then(({data}) => {
        dispatch(setCommentsOnTheOffer(data));
      })
      .catch(() => {
        dispatch(setErrorComments({data: TypeOfError.ERROR_LOADING_COMMENTS, show: true}));
      });
  };

export const commentPost = ({comment, rating}: CommentPostType, id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setIsDataLoadedComments(false));
    await api.post<CommentTypeBackend[]>(`${APIRoute.Comments}/${id}`, {comment, rating})
      .then(({data}) => {
        dispatch(setCommentsOnTheOffer(data));
        dispatch(setErrorComments({data: null, show: false}));
      })
      .catch(() => {
        dispatch(setErrorComments({data: TypeOfError.ERROR_POST_COMMENT, show: true}));
      });
  };

export const checkAuthUser = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setIsDataLoadedAuth(false));
    try {
      const {data} = await api.get<AuthInfoTypeBackend>(APIRoute.Login);
      dispatch(setUserData(data));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE, {progress: undefined});
    }
  };

export const logInUser = ({email, password}: AuthType): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(setIsDataLoadedAuth(false));
    await api.post<AuthInfoTypeBackend>(APIRoute.Login, {email, password})
      .then(({data}) => {
        const {token} = data;
        saveToken(token);
        dispatch(setUserData(data));
        dispatch(redirectToRoute(AppRoute.Main));
      })
      .catch(() => {
        dispatch(setErrorAuth(TypeOfError.ERROR_LOG_IN_USER));
      });
  };

export const logOutUser = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout)
      .then(() => {
        dropToken();
        dispatch(setUserLogOut());
        dispatch(redirectToRoute(AppRoute.Main));
        fetchOffers();
      })
      .catch(() => {
        dispatch(setErrorAuth(DATA_LOADING_ERROR_MESSAGE));
      });
  };
