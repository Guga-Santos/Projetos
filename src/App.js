import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FiltersOnScreen from './components/FiltersOnScreen';
import NumericFilters from './components/NumericFilters';
import SortFilter from './components/SortFilter';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="big-container">
        <FilterByName />
        <NumericFilters />
        <FiltersOnScreen />
        <SortFilter />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
