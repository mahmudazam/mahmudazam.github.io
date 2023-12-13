
import React from 'react';

import Contact from './Contact'
import CV from './CV';
import Header from './Header';
import Home from './Home';
import Publications from './Publications';

import { appRoutes } from './structure';

import { Routes, Route } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const AppDiv = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0em;
  margin: 0em;
  font-family: "Palatino", serif;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PageDiv = styled.div`
  @media only screen and (min-width: 768px) {
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 11%;
    padding-bottom: 7.5%;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 7.5%;
    padding-right: 7.5%;
    padding-top: 35%;
    padding-bottom: 11%;
  }
  margin: '0%';
  animation: ${fadeIn} 0.5s ease-in-out;
  text-align: justify;
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
