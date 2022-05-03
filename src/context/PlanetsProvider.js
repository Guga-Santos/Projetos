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

const TEN = 10;

function PlanetsProvider(props) {
  const { children } = props;
  const [data, setData] = useState([]);

  const [filteredArray, setFilteredArray] = useState(TEN);

  const [index, setIndex] = useState(0);

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
    setFilteredArray(data.filter((object) => object.name.toLowerCase()
      .includes(value.toLowerCase())).length);
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

    numericFilter.forEach(({ column, comparison, value }) => {
      const filtered = (fil) => {
        if (comparison === 'maior que') {
          return fil[column] > Number(value);
        }
        if (comparison === 'menor que') {
          return fil[column] < Number(value);
        }
        if (comparison === 'igual a') {
          return fil[column] === value;
        }
      };
      const dataFiltered = data.filter((ele) => filtered(ele));
      setFilteredArray(dataFiltered.length);
    });
    if (numericFilter.length === 1) {
      setFilteredArray(TEN);
    }
  };

  const resetFilters = () => {
    setNumericFilter([]);
    setColumna(INITIAL_COLUMN);
    setFilteredArray(TEN);
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

  const nextClick = () => {
    if (index === filteredArray - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previewsClick = () => {
    if (index === 0) {
      setIndex(filteredArray - 1);
    } else {
      setIndex(index - 1);
    }
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
    index,
    filteredArray,
    handleChange,
    handleClick,
    handleNumericChanges,
    deleteFilter,
    resetFilters,
    handleSorted,
    clickAndSort,
    nextClick,
    previewsClick,
    setFilteredArray,
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
