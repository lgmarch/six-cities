import {CommentType} from '../../types/comment-type';
import {Month} from '../../constants/constants';

type CommentItemProps = {
  comment: CommentType,
};

function CommentItem({comment}: CommentItemProps): JSX.Element {
  const date = new Date (Date.parse(comment.date));

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">

        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(comment.rating) * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {Month[date.getMonth()]} {date.getFullYear()}
        </time>
      </div>
    </li>
  );
}

export default CommentItem;
