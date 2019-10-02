import React from 'react';
import CardList from './components/CardList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Github Usercard</h1>
      </div>
      <CardList />
    </div>
  );
}

export default App;
