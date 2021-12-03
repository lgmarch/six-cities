import {RootState} from '../../root-reducer';
import {CommentType} from '../../../types/comment-type';
import {createSelector} from '@reduxjs/toolkit';
import {compareDate} from '../../../utils/sort-by';
import {NumberOfOutputMessage} from '../../../constants/constants';

export const selectComments = (state: RootState): CommentType[] => state.comments.comments;
export const selectErrorComments = (state: RootState): string | null => state.comments.error.data;
export const selectErrorShow = (state: RootState): boolean => state.comments.error.show;
export const selectIsDataLoadedComments = (state: RootState): boolean => state.comments.isDataLoaded;
export const selectFirstTenSortedByDateComments = createSelector(selectComments, (comments) =>
  comments.slice(NumberOfOutputMessage.Min, NumberOfOutputMessage.Max).sort(compareDate()));

