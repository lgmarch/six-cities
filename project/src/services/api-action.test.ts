import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from './api';
import {APIRoute, AppRoute} from '../constants/constants';
import {RootState} from '../store/root-reducer';
import {
  checkAuthUser, commentPost, favoritesPost, fetchCommentsOnTheOffer,
  fetchFavorites, fetchOfferById, fetchOffers, fetchOffersNearBy,
  logInUser, logOutUser
} from './api-actions';
import {
  changeStatusFavorite,
  redirectToRoute,
  setCommentsOnTheOffer, setErrorComments,
  setFavorites,
  setIsDataLoadedAuth, setIsDataLoadedComments, setIsDataLoadedFavorites, setIsDataLoadedOffer,
  setIsDataLoadedOffers,
  setOffer,
  setOffers,
  setOffersNearBy,
  setUserData,
  setUserLogOut
} from '../store/action';
import {FakeCommentArrBackend, FakeUserBackend, FakeOfferBackend, FakeOfferArrBackend} from '../utils/mock';
import {AuthType} from '../types/auth-type';
import {CommentPostType} from '../types/comment-type';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, FakeUserBackend);

    await store.dispatch(checkAuthUser());

    expect(store.getActions()).toEqual([setIsDataLoadedAuth(false), setUserData(FakeUserBackend)]);
  });

  it('should dispatch RequiredAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUserData: AuthType = {email: 'test@test.ru', password: '123456'};
    Storage.prototype.setItem = jest.fn();

    const store = mockStore();
    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, FakeUserBackend);

    await store.dispatch(logInUser(fakeUserData));

    expect(store.getActions()).toEqual([
      setIsDataLoadedAuth(false),
      setUserData(FakeUserBackend),
      redirectToRoute(AppRoute.Main),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logOutUser());

    expect(store.getActions()).toEqual([
      setUserLogOut(),
      redirectToRoute(AppRoute.Main),
    ]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch commentPost when POST /comments/:id', async () => {
    const comment: CommentPostType = {comment: 'should dispatch Logout when Delete logout', rating: 5};
    const id = 45;

    mockAPI
      .onPost(`${APIRoute.Comments}/${id}`)
      .reply(200, FakeCommentArrBackend);
    const store = mockStore();

    await store.dispatch(commentPost(comment, id));

    expect(store.getActions()).toEqual([
      setIsDataLoadedComments(false),
      setCommentsOnTheOffer(FakeCommentArrBackend),
      setErrorComments({data: null, show: false}),
    ]);
  });

  it('should dispatch fetchCommentsOnTheOffer when GET /comments/:id', async () => {
    const id = 45;
    mockAPI
      .onGet(`${APIRoute.Comments}/${id}`)
      .reply(200, FakeCommentArrBackend);
    const store = mockStore();

    await store.dispatch(fetchCommentsOnTheOffer(id));

    expect(store.getActions()).toEqual([
      setIsDataLoadedComments(false),
      setCommentsOnTheOffer(FakeCommentArrBackend),
    ]);
  });

  it('should dispatch favoritesPost when POST /favorite/:id/isFavorite', async () => {
    const id = 45;
    const status = 1;
    mockAPI
      .onPost(`${APIRoute.Favorite}/${id}/${status}`)
      .reply(200, FakeOfferBackend);
    const store = mockStore();

    await store.dispatch(favoritesPost(id, status));

    expect(store.getActions()).toEqual([
      changeStatusFavorite(FakeOfferBackend),
    ]);
  });

  it('should dispatch fetchFavorites when GET /favorite', async () => {
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, FakeOfferArrBackend);
    const store = mockStore();

    await store.dispatch(fetchFavorites());

    expect(store.getActions()).toEqual([
      setIsDataLoadedFavorites(false),
      setFavorites(FakeOfferArrBackend),
    ]);
  });

  it('should dispatch fetchOffersNearBy when GET /hotels', async () => {
    const id = 45;
    mockAPI
      .onGet(`${APIRoute.Hotels}/${id}/nearby`)
      .reply(200, FakeOfferArrBackend);
    const store = mockStore();

    await store.dispatch(fetchOffersNearBy(id));

    expect(store.getActions()).toEqual([
      setIsDataLoadedOffer(false),
      setOffersNearBy(FakeOfferArrBackend),
    ]);
  });

  it('should dispatch fetchOfferById when GET /hotels/:id', async () => {
    const id = 45;
    mockAPI
      .onGet(`${APIRoute.Hotels}/${id}`)
      .reply(200, FakeOfferBackend);
    const store = mockStore();

    await store.dispatch(fetchOfferById(id));

    expect(store.getActions()).toEqual([
      setIsDataLoadedOffer(false),
      setOffer(FakeOfferBackend),
    ]);
  });

  it('should dispatch fetchOffers when GET 200/', async () => {
    mockAPI
      .onGet(APIRoute.Hotels)
      .reply(200, FakeOfferArrBackend);
    const store = mockStore();

    await store.dispatch(fetchOffers());

    expect(store.getActions()).toEqual([
      setIsDataLoadedOffers(false),
      setOffers(FakeOfferArrBackend),
    ]);
  });
});
