// const countries = [
//   {code: "TR", name: "Turkiye"},
//   {code: "UA", name: "Ukraine"}
// ]

import { useEffect, useState } from 'react';
import { CountriesContainer } from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <CountriesContainer />
    </div>
  );
};

export default App;
