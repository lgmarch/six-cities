import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {TypeOfSorting} from '../../../constants/constants';
import {setSortingType} from '../../../store/action';

function SortingForm(): JSX.Element {
  const dispatch = useDispatch();
  const [isSortingOpened, setIsSortingOpened] = useState(false);
  const [sort, setSort] = useState(0);

  useEffect(() => {
    dispatch(setSortingType(String(sort)));
  }, [sort, dispatch]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {!isSortingOpened &&
        <span
          className="places__sorting-type"
          onClick={() => {setIsSortingOpened((prevState) => !prevState);}}
        >
          &nbsp;&nbsp;{Object.keys(TypeOfSorting)[sort]}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>}

      {isSortingOpened &&
        <>
          <span className="places__sorting-type">
            &nbsp;&nbsp;{Object.keys(TypeOfSorting)[sort]}
          </span>
          <ul
            className="places__options places__options--custom places__options--opened"
            onClick={() => {setIsSortingOpened((prevState) => !prevState);}}
          >
            <li onClick={()=>setSort(0)} className="places__option places__option--active" value={0}>Popular</li>
            <li onClick={()=>setSort(1)} className="places__option" value={1}>Price: low to high</li>
            <li onClick={()=>setSort(2)} className="places__option" value={2}>Price: high to low</li>
            <li onClick={()=>setSort(3)} className="places__option" value={3}>Top rated first</li>
          </ul>
        </>}
    </form>
  );
}

export default SortingForm;
