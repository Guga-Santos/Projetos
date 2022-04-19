import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const context = useContext(PlanetsContext);
  const { handleChange } = context;
  return (
    <label htmlFor="input-search">
      Search:
      <input
        type="text"
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
    </label>
  );
}

export default FilterByName;
