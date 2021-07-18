import React from 'react';
import { PokeDisplay } from './components/PokeDisplay/pokeDisplay';

// styles
import './styles/main.scss';

function App() {
  return (
    <div className="main-container">
      <PokeDisplay />
    </div>
  );
}

export default App;
