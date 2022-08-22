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
        title: "Edit Data",
        path: "#",
        icon: <BiIcons.BiEdit />,
        iconClosed: <IoIcons.IoMdArrowDropdown />,
        iconOpened: <IoIcons.IoMdArrowDropup />,

        subNavMenus :[
          {
            title: "N-level-menu1",
            path: "#",
            icon: <BiIcons.BiAddToQueue />,
          },
          {
            title: "N-level-menu2",
            path: "#",
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
