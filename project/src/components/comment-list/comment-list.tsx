import {CommentType} from '../../types/comment-type';
import CommentItem from '../comment-item/comment-item';
import {generateId} from '../../utils/generate-id';

type CommentListProps = {
  comments: CommentType[],
};

function CommentList({comments}: CommentListProps): JSX.Element {
  const commentsList = comments.map((item) => (
    <CommentItem
      key={generateId()}
      comment={item}
    />
  ),
  );

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {commentsList}
      </ul>
    </section>
  );
}

export default CommentList;
