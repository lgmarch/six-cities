import React, {FormEvent, useEffect} from 'react';
import RatingStarList from '../../rating-star-list/rating-star-list';
import {commentPost} from '../../../services/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {CommentPostType} from '../../../types/comment-type';
import {getOfferId} from '../../../store/reducers/offer/selectors';
import {useReviewsForm} from '../../../hooks/use-reviews-form';
import {showingError} from '../../../utils/showing-error';
import {
  selectErrorComments, selectErrorShow,
  selectFirstTenSortedByDateComments,
  selectIsDataLoadedComments
} from '../../../store/reducers/comments/selector';
import {setErrorComments} from '../../../store/action';

function ReviewsForm(): JSX.Element {
  const dispatch = useDispatch();
  const offerId = useSelector(getOfferId);
  const isDataLoaded = useSelector(selectIsDataLoadedComments);
  const errorComments = useSelector(selectErrorComments);
  const errorShow = useSelector(selectErrorShow);
  const comments = useSelector(selectFirstTenSortedByDateComments);
  const [comment, setComment, rating, setRating, errors] = useReviewsForm();

  const onSubmit = (userComment: CommentPostType, id: number) => {
    dispatch(commentPost(userComment, id));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if(offerId) {
      onSubmit({comment, rating}, offerId);
    }
  };

  if (errorComments && errorShow) {
    showingError(errorComments);
    dispatch(setErrorComments({data: errorComments, show: false}));
  }

  useEffect(() => {
    if (!errorComments) {
      setComment('');
      setRating(0);
    }
  }, [errorComments, comments, setComment, setRating]);

  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <RatingStarList
        onChange={({target}) => setRating(Number(target.value))}
        rating={rating}
      />

      <textarea
        className="reviews__textarea form__textarea"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}) => setComment(target.value)}
        id="review"
        name="review"
        value={comment}
        disabled={!isDataLoaded}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={errors.ratingErr || errors.commentErr || !isDataLoaded}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
