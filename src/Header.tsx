
import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const HeaderDiv = styled.div`
  width: 100%;
  background: white;
  padding: 0;
  margin: 0;
`

const Nav = styled.span`
  position: relative;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: 80%;
    height: 3em;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    width:100%;
  }
`

const Title = styled.span`
  @media only screen and (min-width: 768px) {
    display: inline-flex;
    width: 20%;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 2em;
  }
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 1.5em;
  color: black;
  background: transparent;
`;

const NavItem = styled(Link)`
  @media only screen and (min-width: 768px) {
    display: inline-flex;
    width: 8em;
    height: 3em;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 2em;
  }
  align-items: center;
  justify-content: center;
  color: black;
  background: transparent;
`;

const Highlighter = styled('span')<{navSeq: number}>`
  position: absolute;
  @media only screen and (min-width: 768px) {
    display: inline-flex;
    width: 8em;
    height: 3em;
    left: ${props => props.navSeq * 8}em;
    transition: left 0.5s;
    border-bottom: 0.15em solid black;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 2em;
    top: ${props => props.navSeq * 2}em;
    transition: top 0.5s;
    border-left: 0.5em solid black;
  }
`;

interface NavItemData {
  route : string,
  text : string
};

const NavList : Array<NavItemData> = [
  { route : '/', text : 'Home' },
  { route : '/publications', text : 'Publications' },
  { route : '/contact', text : 'Contact' }
];

const NavSeq : { [key: string] :  number } =
  NavList.reduce((
    prev : {[key: string] : number},
    curr : NavItemData,
    index: number
  ) => {
    var next = prev;
    var route = curr.route;
    next[route] = index;
    return next;
  }, {});

function Header() {
  let currNavSeq = NavSeq[useLocation().pathname];
  return (
    <HeaderDiv>
      <Title>Mahmud Azam</Title>
      <Nav>
        {NavList.map((navItem) =>
          <NavItem
            to={navItem.route}
            state={currNavSeq}
            style={{ textDecoration: 'none' }}
          >
            {navItem.text}
          </NavItem>
        )}
        <Highlighter navSeq={currNavSeq} />
      </Nav>
    </HeaderDiv>
  );
}

export default Header;
