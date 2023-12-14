
import React, { useState, useEffect } from 'react';
import {
  NavLink,
  useLocation
} from 'react-router-dom';
import styled, { css } from 'styled-components';
import { HiChevronDoubleDown } from 'react-icons/hi';

import { appRoutes } from './structure';

const HeaderDiv = styled.div`
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (max-width: 768px) {
  }
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  background: white;
  padding-top: 0.5em;
  margin: 0;
  box-shadow: 0 3px 2px -2px gray;
`

const Nav = styled.span<{showNav : boolean, buttonEvent : boolean}>`
  position: relative;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 768px) {
    display: inline-block;
    width: 70%;
    height: 3em;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    ${props => props.showNav ? css`
      max-height: 10em;
    ` : css`
      max-height: 0;
    `}
    transition-property: max-height;
    transition-duration: 0.25s;
    transition-delay: ${props => props.buttonEvent ? 0 : 0.35}s;
    overflow: hidden;
    width:100%;
    border-top: ${props => props.showNav ? 0 : 0}em solid gray;
  }
`

const Title = styled.span`
  @media only screen and (min-width: 768px) {
    display: inline-flex;
    width: 30%;
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

const NavItem = styled.span`
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
  background: transparent;
  text-decoration: none;
`;

const Highlighter = styled('span')<{navSeq: number}>`
  position: absolute;
  @media only screen and (min-width: 768px) {
    display: inline-flex;
    width: 8em;
    height: 3em;
    left: ${props => props.navSeq * 8}em;
    transition: left 0.25s;
    border-bottom: 0.25em solid black;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 50%;
    height: 1.8em;
    left: 25%;
    top: ${props => (props.navSeq * 2) - 0.1}em;
    transition: top 0.25s;
    border-bottom: 0.25em solid black;
  }
`;

const NavButton = styled.button`
  position: absolute;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    right: 1em;
    top: 1em;
    height: 2.5em;
    width: 2.5em;
    background: white;
    border: 0.1em solid black;
    border-radius: 0.1em;
  }
`;

interface NavItemData {
  route : string,
  text : string
};

const NavList : Array<NavItemData> = appRoutes.map((rt : any) => {
  return { route : rt.path, text: rt.name };
});

const NavSeq : { [key: string] :  number } = NavList.reduce((
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
  let location = useLocation();
  let currNavSeq = NavSeq[location.pathname];
  let [showNav, setShowNav] = useState(false);
  let [buttonEvent, setButtonEvent] = useState(false);

  useEffect(() => {
    setShowNav(false); // location change triggers Nav collapse
    setButtonEvent(false); // however, this is not by button press
  }, [location]);

  return (
    <HeaderDiv>
      <NavButton onClick={() => {
        setShowNav(!showNav);
        setButtonEvent(true);
      }}>
        <HiChevronDoubleDown style={{
          transform : `rotate(${showNav ? 180 : 0}deg)`,
          transition: 'transform 0.25s'
        }} />
      </NavButton>
      <Title>Mahmud Azam</Title>
      <Nav showNav={showNav} buttonEvent={buttonEvent}>
        {NavList.map((navItem) =>
          <NavLink
            key={navItem.route}
            to={navItem.route}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'black' : 'grey',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            <NavItem>{navItem.text}</NavItem>
          </NavLink>
        )}
        <Highlighter navSeq={currNavSeq} />
      </Nav>
    </HeaderDiv>
  );
}

export default Header;

