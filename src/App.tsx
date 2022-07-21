
import React from 'react';
import './App.css';

import Home from './Home'

import { Link } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <h1>Mahmud Azam</h1>
    <nav>
      <Link to='/'>Home</Link> |{' '}
      <Link to='/publications'>Publications</Link>
    </nav>
    <Home />
  </div>
  );
}

export default App;

