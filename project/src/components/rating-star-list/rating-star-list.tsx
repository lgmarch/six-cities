import React, {ChangeEvent} from 'react';
import SingleStar from '../single-star/single-star';
import {generateId} from '../../utils/generate-id';
import {NUMBER_OF_STARS} from '../../constants/constants';

type onChangeRatingType = (evt: ChangeEvent<HTMLInputElement>) => void;

type RatingStarListProps = {
  onChange: onChangeRatingType;
  rating: number;
};

function RatingStarList({onChange,rating}: RatingStarListProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {Array.from({length: NUMBER_OF_STARS}, (_, k) => k+1)
        .map((value) => (
          <SingleStar
            key={generateId()}
            value={value}
            state={rating}
            onChange={onChange}
          />
        )).reverse()}
    </div>
  );
}

export default RatingStarList;
