import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FiltersOnScreen() {
  const context = useContext(PlanetsContext);
  const { numericFilter, deleteFilter, resetFilters } = context;

  return (
    <div>
      {
        numericFilter.map((obj) => (
          <div
            data-testid="filter"
            key={ Math.random() }
            style={ { display: 'flex', alignItems: 'center' } }
          >
            <h4>
              {' '}
              {obj.column}
              {' '}
              {obj.comparison}
              {' '}
              {obj.value}
            </h4>
            <button
              type="button"
              style={ { margin: '0px 10px' } }
              id={ obj.column }
              onClick={ deleteFilter }
            >
              X

            </button>
          </div>
        ))
      }
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ resetFilters }
      >
        Remover Filtros

      </button>
    </div>
  );
}
