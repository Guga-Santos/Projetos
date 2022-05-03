import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Alderaan from '../images/Alderaan.webp';
import Bespin from '../images/Bespin.webp';
import Coruscant from '../images/Coruscant.webp';
import Dagobah from '../images/Dagobah.webp';
import Endor from '../images/Endor.webp';
import Hoth from '../images/Hoth.webp';
import Kamino from '../images/Kamino.webp';
import Naboo from '../images/Naboo.webp';
import Tatooine from '../images/Tatooine.webp';
import Yavin4 from '../images/Yavin4.webp';
import FilteredData from './FilteredData';

function Table() {
  const context = useContext(PlanetsContext);
  const { data, previewsClick, nextClick, index, filteredArray } = context;

  const planets = [
    Alderaan,
    Bespin,
    Coruscant,
    Dagobah,
    Endor,
    Hoth,
    Kamino,
    Naboo,
    Tatooine,
    Yavin4,
  ];
  return (
    <div className="table-big-container">
      <img className="planets-img" src={ planets[index] } alt={ planets[index] } />
      <div className="spans-container">
        {data.map((_, i) => (i < filteredArray ? (
          <span
            key={ i }
            className={ i === index ? 'spanBig' : 'span' }
          >
            .
          </span>
        ) : null))}
      </div>
      <table className="table-container">
        <thead>
          <tr className="trHead">
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            {/* <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th> */}
          </tr>
        </thead>
        <tbody>
          <FilteredData />
        </tbody>
      </table>
      <div className="planets-btns">
        <button type="button" onClick={ previewsClick }>Previews</button>
        <button type="button" onClick={ nextClick }>Next</button>
      </div>
    </div>

  );
}

export default Table;
