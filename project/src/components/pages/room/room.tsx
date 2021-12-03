import Header from '../../header/header';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../loading/loading';
import {selectErrorOffer, selectIsDataLoaderOffer} from '../../../store/reducers/offer/selectors';
import RoomMain from '../../room-main/room-main';
import {showingError} from '../../../utils/showing-error';
import {setErrorOffer} from '../../../store/action';
import {useEffect} from 'react';
import {
  fetchCommentsOnTheOffer,
  fetchOfferById,
  fetchOffersNearBy
} from '../../../services/api-actions';
import {useParams} from 'react-router-dom';

function Room(): JSX.Element {
  const dispatch = useDispatch();
  const isDataLoadedOffer = useSelector(selectIsDataLoaderOffer);
  const errorOffer = useSelector(selectErrorOffer);

  const {id} = useParams<{id: string }>();

  useEffect(() => {
    dispatch(fetchOfferById(Number(id)));
    dispatch(fetchOffersNearBy(Number(id)));
    dispatch(fetchCommentsOnTheOffer(Number(id)));
  }, [id, dispatch]);

  if (errorOffer.length) {
    showingError(errorOffer);
    dispatch(setErrorOffer(''));
  }

  return(
    <div className="page">
      <span className="visually-hidden">{id}</span>
      <Header/>
      {(!isDataLoadedOffer) && <Loading />}
      {(isDataLoadedOffer) && <RoomMain/>}
    </div>
  );
}

export default Room;
