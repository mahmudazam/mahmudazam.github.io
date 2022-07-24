
import React from 'react';

import { NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

interface NavItemProps {
  isActive : boolean,
  children : string
}

function NavItem(props : NavItemProps) {
  let NavItemSpan = styled.span`
    display: inline-block;
    width: 8em;
    padding: 1em;
    text-align: center;
    color: black;
    ${props.isActive && css`
      border-bottom: 0.15em solid black;
    `}
  `;
  return (
    <NavItemSpan>
      {props.children}
    </NavItemSpan>
  )
};

const HeaderDiv = styled.div`
  width: 100%;
  background: white;
`

const Nav = styled.span`
  display: inline-block;
  width: 80%;
  margin: 0;
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

const NavList = [
  { route : '/', text : 'Home' },
  { route : 'publications', text : 'Publications' },
  { route : 'contact', text : 'Contact' },
]

function Header() {
  return (
    <HeaderDiv>
      <Title>Mahmud Azam</Title>
      <Nav>
      {NavList.map((navItem) =>
        <NavLink
          to={navItem.route}
          style={{ textDecoration: 'none' }}>
        {({ isActive }) =>
          <NavItem isActive={isActive}>
            {navItem.text}
          </NavItem>
        }
        </NavLink>
      )}
      </Nav>
    </HeaderDiv>
  );
}

export default Header;
