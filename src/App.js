import React, { useEffect, useState } from 'react';
import './App2.css';
import FilterByName from './components/FilterByName';
import FiltersOnScreen from './components/FiltersOnScreen';
import Header from './components/Header';
import NumericFilters from './components/NumericFilters';
import SortFilter from './components/SortFilter';
import Table from './components/Table';
import TextScrolling from './components/TextScrolling';
import PlanetsProvider from './context/PlanetsProvider';
import Intro from './pages/Intro';

const MAGIC_NUMBER = 10000;

function App() {
  const [change, setChange] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChange(true);
    }, MAGIC_NUMBER);
  }, []);

  return (
    !change ? <Intro />
      : (
        <PlanetsProvider>
          <Header />
          <div className="big-container">
            <div className="filters-container">
              <h2 className="h2-filtros">Filtros</h2>
              <FilterByName />
              <NumericFilters />
              <FiltersOnScreen />
              <SortFilter />
            </div>
            <Table />
            { change ? <TextScrolling /> : null }
          </div>
        </PlanetsProvider>
      )
  );
}

export default App;
