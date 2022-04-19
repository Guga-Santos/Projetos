import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import PlanetsContext from './PlanetsContext';

const INITIAL_COLUMN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

function PlanetsProvider(props) {
  const { children } = props;
  const [data, setData] = useState([]);

  useFetch(setData);

  const [filter, setFilter] = useState({ filterByName: { name: '' } });
  const [numericFilter, setNumericFilter] = useState([]);
  const [columna, setColumna] = useState(INITIAL_COLUMN);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });
  const [dataOrder, setDataOrder] = useState([]);

  const INITIAL_OPTIONS = {
    column: columna[0],
    comparison: 'maior que',
    value: 0,
  };

  const [selectedFilters, setSelectedFilters] = useState(INITIAL_OPTIONS);

  const handleChange = ({ target: { value } }) => {
    setFilter({ filterByName: { name: value.toLowerCase() } });
  };

  const handleClick = () => {
    setNumericFilter((prev) => [...prev, selectedFilters]);
    setColumna(columna.filter((obj) => obj !== selectedFilters.column));
    setSelectedFilters({
      column: columna.filter((obj) => obj !== selectedFilters.column)[0],
      comparison: 'maior que',
      value: 0,
    });
  };

  const handleNumericChanges = ({ target: { value, id } }) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
  };

  const deleteFilter = ({ target: { id } }) => {
    setNumericFilter((prev) => prev.filter((obj) => obj.column !== id));
    setColumna((prev) => ([
      id,
      ...prev,
    ]));
  };

  const resetFilters = () => {
    setNumericFilter([]);
    setColumna(INITIAL_COLUMN);
  };

  const handleSorted = ({ target: { value, id } }) => {
    setOrder((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const clickAndSort = () => {
    const sorted = data.sort((a, b) => {
      if (order.sort === 'ASC') {
        return a[order.column] - b[order.column];
      }
      return b[order.column] - a[order.column];
    });
    const known = sorted
      .filter((obj) => obj[order.column] !== 'unknown');
    const unknown = sorted
      .filter((obj) => obj[order.column] === 'unknown');
    setDataOrder([...known, ...unknown]);
  };

  const context = {
    INITIAL_COLUMN,
    data,
    filter,
    numericFilter,
    selectedFilters,
    columna,
    order,
    dataOrder,
    handleChange,
    handleClick,
    handleNumericChanges,
    deleteFilter,
    resetFilters,
    handleSorted,
    clickAndSort,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
