import comments from './comments';
import {ActionType} from '../../../types/action-type';
import {FakeCommentArr, FakeCommentArrBackend} from '../../../utils/mock';
import {DATA_LOADING_ERROR_MESSAGE} from '../../../constants/constants';

describe('Reducer: comments', () => {
  it('without additional parameters should return initial state', () => {
    expect(comments(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({comments: [], isDataLoaded: false, error: {data: null, show: false}});
  });

  it('should update comments by load comments', () => {
    const state = {comments: [], isDataLoaded: false, error: {data: null, show: false}};
    const setCommentsOnTheOffer = {
      type: ActionType.SetCommentsOnTheOffer,
      payload: FakeCommentArrBackend,
    };

    expect(comments(state, setCommentsOnTheOffer))
      .toEqual({comments: FakeCommentArr, isDataLoaded: true, error: {data: null, show: false}});
  });

  it('should update comments by change idDataLoaded', () => {
    const state = {comments: [], isDataLoaded: false, error: {data: null, show: false}};

    const setIsDataLoaded = {
      type: ActionType.SetIsDataLoadedComments,
      payload: true,
    };

    expect(comments(state, setIsDataLoaded))
      .toEqual({comments: [], isDataLoaded: true, error: {data: null, show: false}});
  });

  it('should update comments by change error', () => {
    const state = {comments: [], isDataLoaded: false, error: {data: null, show: true}};

    const setErrorComments = {
      type: ActionType.SetErrorComments,
      payload: {data: DATA_LOADING_ERROR_MESSAGE, show: true},
    };

    expect(comments(state, setErrorComments))
      .toEqual({comments: [], isDataLoaded: true, error: {data: DATA_LOADING_ERROR_MESSAGE, show: true}});
  });
});
