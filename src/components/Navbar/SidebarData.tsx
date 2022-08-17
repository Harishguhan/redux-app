import React from "react";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
export const SidebarData = [

    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
    },
    {
        title:'About',
        path:'/',
        icon:<AiIcons.AiOutlineInfoCircle />,
    },
    {
        title:'Contact',
        path:'/',
        icon:<IoIcons.IoIosContact />
    },
    {
        title:'CRUD',
        path:'/',
        icon:<IoIcons.IoMdCreate />,
        iconClosed:<IoIcons.IoMdArrowDropdown />,
        iconOpened:<RiIcons.RiArrowUpFill />,

        subNav:[
            {
                title:'Add Data',
                path:'/add',
                icon:<BiIcons.BiAddToQueue />
                
            },
            {
                title:'View Data',
                path:'/view',
                icon:<AiIcons.AiFillEye />
            },
            {
                title:'Edit Data',
                path:'/',
                icon:<BiIcons.BiEdit />
            },

        ]
    },
    {
        title:'Interceptors',
        path:'/',
        icon:<AiIcons.AiFillSetting/>,
        iconClosed:<IoIcons.IoMdArrowDropdown />,
        iconOpened:<IoIcons.IoMdArrowDropup />,

        subNav:[
            {
                title:'Register',
                path:'/signup',
                icon:<GiIcons.GiArchiveRegister />
            },
            {
                title:'Login',
                path:'/login',
                icon:<AiIcons.AiOutlineLogin />
            },
        ]
    },
    {
        title:"Exit",
        path:'/',
        icon:<IoIcons.IoIosExit />
    }
]