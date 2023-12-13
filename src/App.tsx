
import React from 'react';

import Contact from './Contact'
import CV from './CV';
import Header from './Header';
import Home from './Home';
import Publications from './Publications';

import { appRoutes } from './structure';

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0em;
  margin: 0em;
  font-family: "Palatino", serif;
`;

const appElements : { [key: string] : any } = {
  '/': <Home />,
  '/cv': <CV />,
  '/publications': <Publications />,
  '/contact': <Contact />,
};

function App() {
  return (
    <AppDiv>
      <Header />
      <Routes>
        {appRoutes.map((rt, index) =>
          <Route
            key={index}
            path={rt.path}
            element={appElements[rt.path]}
          />
        )}
      </Routes>
    </AppDiv>
  );
}

export default App;
