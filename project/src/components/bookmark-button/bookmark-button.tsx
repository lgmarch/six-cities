import {favoritesPost} from '../../services/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../constants/constants';
import browserHistory from '../../browser-history';
import {getStylesForBookmark} from '../../utils/get-styles-for-bookmark';
import {selectAuthStatus} from '../../store/reducers/auth/selectors';

type BookmarkButtonProps = {
  id: number,
  isFavorite: boolean,
  pageType: string,
};

function BookmarkButton({id, isFavorite, pageType}: BookmarkButtonProps): JSX.Element {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuthStatus);

  const changeFavorites = (offerNumber: number, status: number) => {
    dispatch(favoritesPost(offerNumber, status));
  };

  const pageStyles = getStylesForBookmark(pageType);

  return (
    <button
      className={isFavorite
        ? `${pageStyles.style}__bookmark-button place-card__bookmark-button--active button`
        : `${pageStyles.style}__bookmark-button button`}
      type="button"
      onClick={auth === AuthorizationStatus.Auth
        ? () => changeFavorites(id, isFavorite ? 0 : 1)
        : () => browserHistory.push(AppRoute.Login)}
    >
      <svg className="place-card__bookmark-icon" width={pageStyles.width} height={pageStyles.height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
