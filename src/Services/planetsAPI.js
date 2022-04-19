// import apiResults from '../apiResults.json';

const planetsAPI = async () => {
  // return apiResults
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return Error(error);
  }
};

export default planetsAPI;
