import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [

  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiOutlineInfoCircle />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoIosContact />,
  },
  {
    title: "CRUD",
    path: "#",
    icon: <IoIcons.IoMdCreate />,
    iconClosed: <IoIcons.IoMdArrowDropdown />,
    iconOpened: <IoIcons.IoMdArrowDropup />,

    subNav: [
      {
        title: "Add Data",
        path: "/add",
        icon: <BiIcons.BiAddToQueue />,
      },
      {
        title: "View Data",
        path: "/view",
        icon: <AiIcons.AiFillEye />,
      },
      {
        title: "Update",
        path: "#",
        icon: <BiIcons.BiEdit />,
        iconClosed: <IoIcons.IoMdArrowDropdown />,
        iconOpened: <IoIcons.IoMdArrowDropup />,

        subNavMenus :[
          {
            title: "Name Details",
            path: "/name",
            icon: <BiIcons.BiAddToQueue />,
          },
          {
            title: "Bank details",
            path: "/bank",
            icon: <BiIcons.BiAddToQueue />,
          },
        ],
    
      },
    ],
  },
  {
    title: "Interceptors",
    path: "#",
    icon: <AiIcons.AiFillSetting />,
    iconClosed: <IoIcons.IoMdArrowDropdown />,
    iconOpened: <IoIcons.IoMdArrowDropup />,

    subNav: [
      {
        title: "Register",
        path: "/signup",
        icon: <GiIcons.GiArchiveRegister />,
        iconClosed: <IoIcons.IoMdArrowDropdown />,
        iconOpened: <IoIcons.IoMdArrowDropup />,
      },
      {
        title: "Login",
        path: "/login",
        icon: <AiIcons.AiOutlineLogin />,
      },
    ],
  },
  {
    title: "Exit",
    path: "/exit",
    icon: <IoIcons.IoIosExit />,
  },
];
