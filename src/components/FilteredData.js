import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilteredData() {
  const context = useContext(PlanetsContext);
  const {
    data,
    dataOrder,
    numericFilter,
    filter,
    index,
    setFilteredArray,
  } = context;

  const { filterByName } = filter;

  let dataFiltered = dataOrder.length < 1 ? data : dataOrder;

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
    dataFiltered = dataFiltered.filter((ele) => filtered(ele));
    setFilteredArray(dataFiltered.length);
  });

  return dataFiltered.filter((object) => object.name.toLowerCase()
    .includes(filterByName.name.toLowerCase()))
    .map((obj, i) => (i === index ? (
      <tr key={ obj.name } className="trBody">
        <td data-testid="planet-name">{obj.name}</td>
        <td>{`${obj.rotation_period} hours`}</td>
        <td>{`${obj.orbital_period} days`}</td>
        <td>{`${obj.diameter} Km`}</td>
        <td>{obj.climate}</td>
        <td>{obj.gravity}</td>
        <td>{obj.terrain}</td>
        <td>{`${obj.surface_water} %`}</td>
        <td>{obj.population}</td>
        {/* <td>{obj.films.map((film) => film)}</td>
        <td>{obj.created}</td>
        <td>{obj.edited}</td>
        <td>{obj.url}</td> */}
      </tr>) : null));
}
