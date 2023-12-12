
import React from 'react';

import Contact from './Contact'
import CV from './CV';
import Header from './Header';
import Home from './Home';
import Publications from './Publications';

import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0em;
  margin: 0em;
  font-family: "Palatino", serif;
`;

export const PageDiv = styled.div`
  @media only screen and (min-width: 768px) {
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 5%;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;  
  }
`;

export const appRoutes = [
{
  path: '/',
  name: 'Home',
},
{
  path: '/cv',
  name: 'CV',
},
{
  path: '/publications',
  name: 'Publications',
},
{
  path: '/contact',
  name: 'Contact',
},
]

const appElements = new Map<string, any>([
  ['/', <Home />],
  ['/cv', <CV />],
  ['/publications', <Publications />],
  ['/contact', <Contact />],
]);


function App() {
  console.log(Home)
  return (
    <AppDiv>
      <Header />
      <Routes>
        {appRoutes.map((rt) =>
          <Route key={rt.path} path={rt.path} element={appElements.get(rt.path)} />
        )}
      </Routes>
    </AppDiv>
  );
}

export default App;
