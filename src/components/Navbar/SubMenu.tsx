import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  color: white;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color: white;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;

  &:hover {
    background: blue;
    border: 2px solid white;
    border-radious: 5px;
    curser: pointer;
    color: white;
  }
`;
const Submenu = ({ item }: any,path:string) => {
  const [currPath, setCurrPath] = useState("");
  const location = useLocation();
  const [subNav, setsubNav] = useState(false);

  const [subNavMenu, setsubNavMenu] = useState(false);
  const showsubNav = () => setsubNav(!subNav);
  const showsubNavMenu = () => setsubNavMenu(!subNavMenu);
  useEffect(() => {
    setCurrPath(window.location.pathname);
  }, [location]);

  return (
    <>
      <SidebarLink
        to={item.path}
        style={currPath === item.path ? { backgroundColor: "lightgreen" } : {}}
        onClick={item.subNav && showsubNav}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subNav &&
        item.subNav?.map((item: any) => {
          return (
            <>
              <DropdownLink
                to={item.path}
                style={currPath === item.path ? { backgroundColor: "lightgreen" } : {}}
                onClick={item.subNavMenus && showsubNavMenu}
              >
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
                <p style={{ marginLeft: "60px" }}>
                  {" "}
                  {item.subNav && subNav
                    ? item.iconOpened
                    : item.subNavMenu
                    ? item.iconClosed
                    : item.iconClosed}
                </p>
              </DropdownLink>
              {subNavMenu &&
                item.subNavMenus?.map((item: any) => {
                  return (
                    <>
                    <DropdownLink to={item.path}  style={currPath === item.path ? { backgroundColor: "lightgreen" } : {}}>
                     
                      {item.icon}
                      <SidebarLabel>{item.title}</SidebarLabel>
                      {item.iconClosed}
                    </DropdownLink>
                    </>
                  );
                })}
            </>
          );
        })}
    </>
  );
};

export default Submenu;

