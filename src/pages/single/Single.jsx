import React from 'react'
import "./single.scss"
// import Side from "../../components/side/side"
import Sidebartest from "../../components/sidebartest/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import image from "./sa2.jpg"
import AreaChart from "../../components/chart/AreaChart/AreaChart"
import Table from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      {/* <Side /> */}
      <Sidebartest/>
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src={image}
                alt=''
                className='itemImg'>

              </img>
              <div className='details'>
                <h1 className='itemTitle'>Samantha </h1>
                <div className='detailItem'>
                  <span className='itemkey'>Email:</span>
                  <span className='itemValue'>samanth@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemkey'>Address:</span>
                  <span className='itemValue'>Elton st. 265 Garden Yd. NewYork</span>
                </div>
                <div className='detailItem'>
                  <span className='itemkey'>Country:</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>


          </div>
          <div className='right'>
              <AreaChart aspect={3/1} title="user spending (Last 6 Months)"/>
          </div>
        </div>
        <div className='bottom'>
            <Table/>
        </div>
        
      </div>
    </div>
  )
}

export default Single