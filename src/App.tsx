
import React from 'react';

import Contact from './Contact'
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
  font-family: "Garamond", serif;
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


function App() {
  return (
    <AppDiv>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AppDiv>
  );
}

export default App;
