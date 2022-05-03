import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilters() {
  const context = useContext(PlanetsContext);
  const {
    handleNumericChanges,
    handleClick,
    selectedFilters,
    columna } = context;

  return (
    <div className="numeric-filter-container">
      <label htmlFor="column">
        Coluna:
        <select
          id="column"
          data-testid="column-filter"
          onChange={ (e) => handleNumericChanges(e) }
          value={ selectedFilters.column }
        >
          {columna.map((opt) => (
            <option key={ opt }>{opt}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        Operador:
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => handleNumericChanges(e) }
          value={ selectedFilters.comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ (e) => handleNumericChanges(e) }
          value={ selectedFilters.value }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </div>
  );
}

export default NumericFilters;
