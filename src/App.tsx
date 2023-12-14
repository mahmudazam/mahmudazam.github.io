
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header/Header';
import { appRoutes } from './structure';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles['top']}>
      <Header />
      <Routes>
        {appRoutes.map((rt, index) =>
          <Route key={index} path={rt.path} element={<rt.component />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
