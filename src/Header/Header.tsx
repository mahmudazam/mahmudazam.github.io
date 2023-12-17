
import React, { useEffect } from 'react';
import {
  useLocation
} from 'react-router-dom';

import Highlighter from './Highlighter';
import NavButton from './NavButton';
import Nav from './Nav';
import NavItem from './NavItem';
import Title from './Title';
import { appRoutes } from '../structure';
import { useNavState } from '../state'

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
  const showNav = useNavState(state => state.showNav)
  const setShowNav = useNavState(state => state.setShowNav)
  const setCollapseNavDelay = useNavState(state => state.setCollapseNavDelay)

  useEffect(() => {
    setShowNav(false); // location change triggers Nav collapse
    setCollapseNavDelay(true); // however, this is not by button press
  }, [location, setShowNav, setCollapseNavDelay]);

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
      <Nav>
        {NavList.map((navItem, index) =>
          <NavItem key={index} toRoute={navItem.route}>
            {navItem.text}
          </NavItem>
        )}
        <Highlighter navSeq={currNavSeq} />
      </Nav>
      <NavButton
        onClick={() => {
          setShowNav(!showNav);
          setCollapseNavDelay(false);
        }}
      />
    </div>
  );
}

export default Header;

