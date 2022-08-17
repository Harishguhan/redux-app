import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const SidebarLink = styled(Link)`
display:flex;
color:white;
justify-content:space-between;
align-items:center;
padding:20px;
list-style:none;
height:60px;
text-decoration:none;
font-size:18px;
color:white;


&:hover{
    background:#252831;
    border-left: 4px solid #632ce4;
    cursor:pointer;
    color:white;
}
`;

const SidebarLabel = styled.span`
margin-left:16px;
`;
const DropdownLink = styled(Link)`
background:#414757;
height:60px;
padding-left:30px;
display:flex;
align-items:center;
text-decoration:none;
color:white;
font-size:18px;


&:hover{
    background:black;
    border:2px solid white;
    border-radious:5px;
    curser:pointer;
    color:white;
}
`;
const Submenu = ( {item }:any ) =>{

    const [subNav,setsubNav] = useState(false);

    const showsubNav = () => setsubNav(!subNav)

    return(
        <>
        <SidebarLink to={item.path} onClick={item.subNav && showsubNav }>
            <div>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
                { item.subNav && subNav ? item.iconOpeened : item.subNav ? item.iconClosed:null}
            </div>
        </SidebarLink>
        { subNav && item.subNav.map((item:any) =>{
            return(
                <DropdownLink to={item.path}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            );
        }) }
        </>
    );
}


export default Submenu