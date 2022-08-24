import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import Submenu from "./SubMenu";

const Nav = styled.div`
background:black;
height:80px;
display:flex;
justify-content:flex-start;
align-items-center;
position:fixed;
width:100%;
`;

const NavIcon = styled(Link)`
  margin: 2rem;
  font-size:2rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  color:white;

  &:hover{
    color:white;
  }
`;

const SidebarNav = styled.nav`
background:black;
width:250px;
height:100vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
left:${({ sidebar }:any) => (sidebar ? '0' : '-100%')};
transition:350ms;
z-index:10;
`; 

const SidebarWrap = styled.div`
width:100%;
`;

const Navbar = () => {
  
  const [currentpath,setcurrentpath] = useState('');
  
  const location = useLocation();

  const [sidebar,setsidebar] = React.useState<boolean>(false);

  const showsidebar = () => setsidebar(!sidebar);

  useEffect(() =>{
    setcurrentpath(window.location.pathname);
  },[location])
  console.log(window.location.pathname)
  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showsidebar}/>
        </NavIcon>
      </Nav>
      <SidebarNav style={sidebar}>
        <SidebarWrap>
        <NavIcon to="#">
          <AiIcons.AiOutlineClose onClick={showsidebar} />
        </NavIcon>
        {SidebarData.map((item:any) => {
            return <Submenu item={item} />
        })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Navbar;
