import { useEffect, useState } from 'react';
import { AuthorsContainer } from './components/Authors';

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <AuthorsContainer />
    </div>
  );
};

export default App;
