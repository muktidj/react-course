import React from 'react';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <h1>Hii, From React</h1>
    // </div>
    React.createElement('div',{className: 'App'},  React.createElement('h1', 'null', 'Does this work ?'))
  );
}

export default App;
