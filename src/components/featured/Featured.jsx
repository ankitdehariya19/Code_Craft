import React from 'react'
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgressBar from "./CircularProgressBar/CircularProgressBar"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressBar />
        </div>
        <p className='title'>Total Sales Made Today</p>
        <p className='amount'>$425</p>
        <p className='desc'>
          Previous Transactions Processing. Last Payments May Not Be Included.
        </p>

        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <ArrowDropDownIcon fontSize='small' />
              <div className='resultAmount'>$12.04k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult positive'>
              <ArrowDropUpIcon fontSize='small' />
              <div className='resultAmount'>$12.04k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positive'>
              <ArrowDropUpIcon fontSize='small' />
              <div className='resultAmount'>$12.04k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured