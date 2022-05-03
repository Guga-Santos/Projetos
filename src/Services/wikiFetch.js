const wikiFetch = async () => {
//   const URL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=alderaan';
  const URL = 'https://pt.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles="alderaan"';

  try {
    const promise = await fetch(URL);
    const response = await promise.json();
    return response;
  } catch (error) {
    return Error(error);
  }
};

export default wikiFetch;
