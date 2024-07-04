import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

function Header(){
    return(
      <MainHeader>
         <NavLink to ="/">
           <img src="./logo192.png" alt="my logo img" />
         </NavLink>
         <Nav />
      </MainHeader>

    );
};

const MainHeader =styled.header`
  padding:0 4.8rem;
  height: 17rem;
  background-color: ${({theme}) => theme.colors.bg};
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:relative;

  .logo{
    height:5rem;
  }

`;
export default Header;
// justify content aligns items inside flex container along main axis
// space btw distributes items evenly first item at start amd last item at end and
// and such that other items are evenly in between
// nav link goes to diff pages without refresh