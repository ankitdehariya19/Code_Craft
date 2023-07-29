import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './side.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import CelebrationIcon from '@mui/icons-material/Celebration';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ForumIcon from '@mui/icons-material/Forum';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TerminalIcon from '@mui/icons-material/Terminal';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import CalculateIcon from '@mui/icons-material/Calculate';
import Image from './11.png';
import SideSubMenu from '../sideSubMenu/SideSubMenu';
// import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { NavLink } from "react-router-dom";





const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon />,
    subRoutes: [
      {
        path: '/Dashboard/Ecommerce',
        name: 'Ecommerce',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Dashboard/Domotic',
        name: 'Domotic',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Dashboard/Support',
        name: 'Support',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Dashboard/Hosting',
        name: 'Hosting',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Dashboard/E-Learning',
        name: 'ELearning',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Dashboard/Accounting',
        name: 'Accounting',
        // icon: <RadioButtonCheckedIcon />,
      },
    ],
  },
  {
    path: '/',
    name: 'Datatables',
    icon: <TableChartIcon />,

    subRoutes: [
      {
        path: '/Dashboard/Datatable',
        name: 'Datatable',
        // icon: <RadioButtonCheckedIcon />,
      },]
  },
  {
    path: '/',
    name: 'charts',
    icon: <PieChartIcon />,

    subRoutes: [
      {
        path: '/Dashboard/Apex charts',
        name: 'Apex charts',
        // icon: <RadioButtonCheckedIcon />,
      },]
  },
  {
    path: '/',
    name: 'Authentication',
    icon: <LockPersonIcon />,

    subRoutes: [
      {
        path: '/Dashboard/Singup',
        name: 'Singup',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Dashboard/Sing In',
        name: 'Sing In',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Dashboard/Forgot Password',
        name: 'Forgot Password',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },
  {
    path: '/',
    name: 'Accounting',
    icon: <CalculateIcon />,

    subRoutes: [
      {
        path: '/Accounting/Bill List',
        name: 'Bill List',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Accounting/Bill Grid',
        name: 'Bill Grid',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Accounting/Invoices List',
        name: 'Invoices List',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Accounting/Invoices Grid',
        name: 'Invoices Grid',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Accounting/Invoice',
        name: 'Invoice',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },
  {
    path: '/',
    name: 'Social',
    icon: <CelebrationIcon />,

    subRoutes: [
      {
        path: '/Social/Social Feed',
        name: 'Social Feed',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Social/Events',
        name: 'Events',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },
  {
    path: '/',
    name: 'Notification',
    icon: <NotificationsActiveIcon />,
    subRoutes: [
      {
        path: '/Dashboard/Notifaction',
        name: 'Notifaction',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },
  {
    path: '/',
    name: 'Support',
    icon: <SupportAgentIcon />,

    subRoutes: [
      {
        path: '/Support/Ticket Details',
        name: 'Ticket Details',
        // icon: <RadioButtonCheckedIcon />,
      },]
  },
  {
    path: '/',
    name: 'Projects',
    icon: <TerminalIcon />,

    subRoutes: [
      {
        path: '/Projects/Projects List',
        name: 'Projects List',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Projects/Projects Grid',
        name: 'Projects Grid',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Projects/Projects Details',
        name: 'Projects Details',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },
  {
    path: '/',
    name: 'CRM',
    icon: <DisplaySettingsIcon />,

    subRoutes: [
      {
        path: '/CRM/Segments',
        name: 'Segments',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/CRM/Kanban Board',
        name: 'Kanban Board',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/CRM/Deal Details',
        name: 'Deal Details',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },
  {
    path: '/',
    name: 'Contacts',
    icon: <PermContactCalendarIcon />,

    subRoutes: [
      {
        path: '/Contacts/Contact List',
        name: 'Contact List',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Contacts/Contact Grid',
        name: 'Contact Grid',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Contacts/Contact Details',
        name: 'Contact Details',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },
  {
    path: '/',
    name: 'Messages',
    icon: <ForumIcon />,

    subRoutes: [
      {
        path: '/Messages/Message Inbox',
        name: 'Message Inbox',
        // icon: <RadioButtonCheckedIcon />,
      },]
  },
  {
    path: '/',
    name: 'Forms',
    icon: <AssignmentIcon />,

    subRoutes: [
      {
        path: '/Forms/Horizontal Form',
        name: 'Horizontal Form',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Forms/Vertical Form',
        name: 'Vertical Form',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },
  {
    path: '/',
    name: 'Empty States',
    icon: <FilterNoneIcon />,
    subRoutes: [
      {
        path: '/Empty States/Placeholder',
        name: 'Placeholder',
        // icon: <RadioButtonCheckedIcon />,
      },
      {
        path: '/Empty States/Error 404',
        name: 'Error 404',
        // icon: <RadioButtonCheckedIcon />,
      },
    ]
  },

];

const Side = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '140px',
      padding: '5px 15px',
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      animate={{
        width: isOpen ? '250px' : '45px',
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 10,
        },
      }}
      className='sidebar'
    >
      <div className='top_section'>
        {isOpen && (
          <motion.img
            variants={showAnimation}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='logoImg'
            src={Image}
            alt=''
          ></motion.img>
        )}

        {isOpen && (
          <motion.h1
            variants={showAnimation}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='logo'
          >
            Code Craft
          </motion.h1>
        )}
        <div className='bars'>
          <ListIcon onClick={toggle} />
        </div>
      </div>

      <div className='search'>
        <div className='search_icon'>
          <SearchIcon />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.input
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={inputAnimation}
              className='search_input'
              placeholder='Search..'
            />
          )}
        </AnimatePresence>
      </div>

      <section className='routes'>
        {routes.map((route, index) => {
          if (route.subRoutes) {
            return (
              <SideSubMenu
                showAnimation={showAnimation}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                route={route}
                key={route.name}
              />
            );
          }

          return (
            <NavLink
              activeClassName='active'
              to={route.path}
              key={route.name}
              className='link'
            >
              <div className='icon'>{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='link_text'
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </section>
      <main>{children}</main>
    </motion.div>
  );
};

export default Side;








      
    


  

             
    


