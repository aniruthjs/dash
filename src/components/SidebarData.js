import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
//import * as FontAwesomeIcon from 'react-icons/';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome  class="nav-icon" />,
    //icon:<FontAwesomeIcon icon="fa-solid fa-house"  />,
    cName: 'nav-text'
  },
  {
    title: 'Pages',
    path: '/Pages',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Application',
    path: '/Application',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'UI component',
    path: '/UI component',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Widgets',
    path: '/Widgets',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Forms',
    path: '/Forms',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Charts',
    path: '/Charts',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];