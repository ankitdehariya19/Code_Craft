import React from 'react'
import "./sidebar.scss"
import Image from './12.png';
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
import LogoutIcon from '@mui/icons-material/Logout';
import AppsIcon from '@mui/icons-material/Apps';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";

import { Link } from 'react-router-dom';

import { } from "@mui/icons-material"

const Sidebar = () => {
     return (
          <div className='sidebar'>
               <div className='top'>
                    <div className='logobox'>
                         <Link to="/">
                              <img src={Image} alt='' className='logoImg'></img>
                         </Link>
                    </div>

                    <div className='logoText'>
                         <Link to="/" style={{ textDecoration: "none" }}>
                              <span>Code Craft</span>
                         </Link>
                    </div>
                    <div className='hideButtonBox'>
                         <ViewHeadlineIcon className='' />
                    </div>
               </div>
               <hr />
               <div className='center'>
                    <ul>
                         <p className='title'>MAIN</p>
                         <Link to="/" style={{ textDecoration: "none" }}>
                         <li>
                              <DashboardIcon className='icon' />
                              <span >Dashboard</span>
                         </li>
                         </Link>

                         <li>
                              <TableChartIcon className='icon' />
                              <span >Datatables</span>
                         </li>
                         <Link to="/users/test" style={{ textDecoration: "none" }}>
                              <li>
                                   <PersonOutlineIcon className="icon" />
                                   <span>Users</span>
                              </li>
                         </Link>
                         <Link to="/products" style={{ textDecoration: "none" }}>
                              <li>
                                   <StoreIcon className="icon" />
                                   <span>Products</span>
                              </li>
                         </Link>
                         <li>
                              <PieChartIcon className='icon' />
                              <span >charts</span>
                         </li>
                         <p className='title'>USEFULL</p>
                         <li>
                              <LockPersonIcon className='icon' />
                              <span >Authentication</span>
                         </li>
                         <li>
                              <CelebrationIcon className='icon' />
                              <span >Social</span>
                         </li>
                         <li>
                              <NotificationsActiveIcon className='icon' />
                              <span >Notification</span>
                         </li>
                         <p className='title'>SERVICE</p>
                         <li>
                              <SupportAgentIcon className='icon' />
                              <span >Support</span>
                         </li>
                         <li>
                              <TerminalIcon className='icon' />
                              <span >Projects</span>
                         </li>
                         <li>
                              <DisplaySettingsIcon className='icon' />
                              <span >CRM</span>
                         </li>
                         <li>
                              <PermContactCalendarIcon className='icon' />
                              <span >Contacts</span>
                         </li>
                         <li>
                              <ForumIcon className='icon' />
                              <span >Messages</span>
                         </li>
                         <li>
                              <AssignmentIcon className='icon' />
                              <span >Forms</span>
                         </li>
                         <li>
                              <LogoutIcon className='icon' />
                              <span >Logout</span>
                         </li>
                         <li>
                              <AppsIcon className='icon' />
                              <span >Ui Elements</span>
                         </li>
                    </ul>
               </div>
               <div className='bottom'>
                    <div className='colorOption'></div>
                    <div className='colorOption'></div>
                    <div className='colorOption'></div>
               </div>
          </div>
     )
}

export default Sidebar









