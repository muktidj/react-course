import React from 'react';
import './App.css';
import PersonFunc from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hii, From React</h1>
      <PersonFunc name="Mukti" age={Math.floor(Math.random() * 30)}/>
      <PersonFunc name="Dwi" age={Math.floor(Math.random() * 30)}>My Hobbies: Football</PersonFunc>
      <PersonFunc name="Jatmoko" age={Math.floor(Math.random() * 30)}/>
    </div>

  );
}

export default App;
