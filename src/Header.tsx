
import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const HeaderDiv = styled.div`
  width: 100%;
  background: white;
`

const Nav = styled.span`
  display: inline-block;
  position: relative;
  width: 80%;
  margin: 0;
  padding-top: 1.5em;
`

const Title = styled.span`
  display: inline-block;
  width: 20%;
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  color: black;
  background: transparent;
`;

const NavItem = styled.span`
  display: inline-block;
  width: 8em;
  height: 2em;
  text-align: center;
  color: black;
`;

const Highlighter = styled('span')<{navSeq: number}>`
  display: inline-block;
  width: 8em;
  position: absolute;
  top: 3.5em;
  left: ${props => props.navSeq * 8}em;
  transition: left 0.5s;
  border-bottom: 0.15em solid black;
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
      <Highlighter navSeq={currNavSeq} />
      {NavList.map((navItem) =>
        <NavLink
          to={navItem.route}
          state={currNavSeq}
          style={{ textDecoration: 'none' }}>
        {({ isActive }) =>
          <NavItem>{navItem.text}</NavItem>
        }
        </NavLink>
      )}
      </Nav>
    </HeaderDiv>
  );
}

export default Header;
