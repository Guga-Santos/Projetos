import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SortFilter() {
  const context = useContext(PlanetsContext);
  const { INITIAL_COLUMN, handleSorted, clickAndSort } = context;

  return (
    <div>
      <select
        onChange={ handleSorted }
        data-testid="column-sort"
        id="column"
      >
        {INITIAL_COLUMN.map((obj) => (
          <option key={ obj } value={ obj }>{obj}</option>
        ))}
      </select>
      <label htmlFor="SORT">
        Ascendente
        <input
          type="radio"
          name="SORT"
          value="ASC"
          id="sort"
          onChange={ handleSorted }
          data-testid="column-sort-input-asc"
        />
        Descendente
        <input
          type="radio"
          name="SORT"
          value="DESC"
          id="sort"
          onChange={ handleSorted }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ clickAndSort }
      >
        SORT

      </button>

    </div>
  );
}

export default SortFilter;
