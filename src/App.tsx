
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/Header';
import { appRoutes } from './structure';

const AppDiv = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0em;
  margin: 0em;
  font-family: "Palatino", serif;
`;

function App() {
  return (
    <AppDiv>
      <Header />
      <Routes>
        {appRoutes.map((rt, index) =>
          <Route key={index} path={rt.path} element={<rt.component />} />
        )}
      </Routes>
    </AppDiv>
  );
}

export default App;
