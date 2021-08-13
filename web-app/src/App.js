import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APLICATION</h1>
     <div className="form">
      <label>name</label>
      <input type="text" name="userName"></input>
      <label>mail</label>
      <input type="text" name="mail"></input>
      <button>summit</button>
    </div>
    </div>
  );
}

export default App; 
