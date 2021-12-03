import React, {ChangeEvent} from 'react';
import {useSelector} from 'react-redux';
import {selectIsDataLoadedComments} from '../../store/reducers/comments/selector';

type onChangeRatingType = (evt: ChangeEvent<HTMLInputElement>) => void;

type SingleStarProps = {
  value: number,
  state: number,
  onChange: onChangeRatingType,
}

function SingleStar({value, state, onChange}: SingleStarProps): JSX.Element {
  const isDataLoaded = useSelector(selectIsDataLoadedComments);
  const id = `${value}-stars`;

  return (
    <>
      <input
        data-testid="star"
        className="form__rating-input visually-hidden"
        type="radio"
        onChange={onChange}
        name="rating"
        id={id}
        value={value}
        checked={state === value}
        disabled={!isDataLoaded}
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default SingleStar;
