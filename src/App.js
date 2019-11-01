import React from 'react';
import Pet from './Pet';
import './App.css';
import SearchParams from './SearchParams';

function App() {
  return (
    <div>
      <h1>Adopt me</h1>
      <Pet name="Yuki" breed="Shiba" animal="Dog" />
      <Pet name="Dogo" breed="Ragdoll" animal="Cat" />
      <SearchParams/>
      </div>
  );
}

export default App;
