import {mapComments} from '../../../utils/transform-properties';
import {createReducer} from '@reduxjs/toolkit';
import {setCommentsOnTheOffer, setErrorComments, setIsDataLoadedComments} from '../../action';
import {StateCommentsType} from '../../../types/store-type';

const initialState: StateCommentsType = {
  comments: [],
  isDataLoaded: false,
  error: {
    data: null,
    show: false,
  },
};

const comments = createReducer(initialState, (builder) => {
  builder
    .addCase(setCommentsOnTheOffer, (state, action) => {
      state.comments = mapComments(action.payload);
      state.isDataLoaded = true;
    })
    .addCase(setIsDataLoadedComments, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setErrorComments, ((state, action) => {
      state.error.data = action.payload.data;
      state.error.show = action.payload.show;
      state.isDataLoaded = true;
    }));
});

export default comments;
