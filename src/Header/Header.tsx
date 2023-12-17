
import React, { useState, useEffect } from 'react';
import {
  useLocation
} from 'react-router-dom';

import Highlighter from './Highlighter';
import NavButton from './NavButton';
import Nav from './Nav';
import NavItem from './NavItem';
import Title from './Title';
import { appRoutes } from '../structure';

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
    <div className={`
      fixed
      z-10
      flex
      flex-wrap
      min-w-full
      max-w-full
      bg-white
      shadow
    `}>
      <Title>Mahmud Azam</Title>
      <Nav showNav={showNav} buttonEvent={buttonEvent}>
        {NavList.map((navItem, index) =>
          <NavItem key={index} toRoute={navItem.route}>
            {navItem.text}
          </NavItem>
        )}
        <Highlighter navSeq={currNavSeq} />
      </Nav>
      <NavButton
        showNav={showNav}
        onClick={() => {
          setShowNav(!showNav);
          setButtonEvent(true);
        }}
      />
    </div>
  );
}

export default Header;

