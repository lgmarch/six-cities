import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {CommentLength} from '../constants/constants';

type ResultLoginForm = [
  comment: string, setComment:  Dispatch<SetStateAction<string>>,
  rating: number, setRating: Dispatch<SetStateAction<number>>,
  errors: {commentErr: boolean, ratingErr: boolean}
];

export const useReviewsForm = (): ResultLoginForm => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({
    commentErr: true,
    ratingErr: true,
  });

  useEffect(() => {
    if (comment.length >= CommentLength.MIN_LENGTH && comment.length <= CommentLength.MAX_LENGTH) {
      setErrors((prev ) => ({
        ...prev,
        commentErr: false,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        commentErr: true,
      }));
    }

    if (rating !== 0) {
      setErrors((prev) => ({
        ...prev,
        ratingErr: false,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        ratingErr: true,
      }));
    }
  }, [comment, rating]);

  return [comment, setComment, rating, setRating, errors];
};
