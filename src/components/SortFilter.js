import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function SortFilter() {
  const context = useContext(PlanetsContext);
  const { INITIAL_COLUMN, handleSorted, clickAndSort } = context;

  return (
    <div className="sort-container">
      <label htmlFor="column">
        Coluna:
        <select
          onChange={ handleSorted }
          data-testid="column-sort"
          id="column"
        >
          {INITIAL_COLUMN.map((obj) => (
            <option key={ obj } value={ obj }>{obj}</option>
          ))}
        </select>
      </label>
      <label htmlFor="SORT">
        <input
          type="radio"
          name="SORT"
          value="ASC"
          id="sort"
          onChange={ handleSorted }
          data-testid="column-sort-input-asc"
        />
        Ascendente
        <br />
        <input
          type="radio"
          name="SORT"
          value="DESC"
          id="sort"
          onChange={ handleSorted }
          data-testid="column-sort-input-desc"
        />
        Descendente
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
