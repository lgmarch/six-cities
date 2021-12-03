import PlaceCard from '../place-card/place-card';
import {PlaceCardType} from '../../types/place-card-type';

type PlaceCardListProps = {
  pageType: string,
  placeCardArray: PlaceCardType[],
  onChange?: (a: PlaceCardType | null) => void,
};

function PlaceCardList({pageType, placeCardArray, onChange}: PlaceCardListProps): JSX.Element {
  return (
    <>
      {
        placeCardArray.map((card) => (
          <PlaceCard
            key={card.id}
            pageType={pageType}
            card={card}
            onChangeActiveCard={onChange}
          />
        ))
      }
    </> );
}

export default PlaceCardList;
