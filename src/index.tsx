import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';

// Components:
import Home from './Home';
import Publications from './Publications';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
<React.StrictMode>
<div className='App'>
  <h1>Mahmud Azam</h1>
  <nav>
    <Link to='/'>Home</Link> |{' '}
    <Link to='/publications'>Publications</Link>
  </nav>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/publications' element={<Publications />} />
  </Routes>
</div>
</React.StrictMode>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
