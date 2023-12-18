import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const onFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <input
        type="text"
        name="filterName"
        className={css.filter}
        value={filter.status}
        onChange={onFilterChange}
        placeholder="Enter name"
      />
    </div>
  );
};

export default Filter;
