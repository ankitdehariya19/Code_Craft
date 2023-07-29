import React from 'react'
import "./list.scss"
// import Side from "../../components/side/side"
import Sidebartest from "../../components/sidebartest/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from '../../components/datatable/Datatable'

const List = () => {
  return (
    <div className='list'>
       <Sidebartest/>
    {/* <Side/> */}
        <div className='listcontainer'>
            <Navbar/>
             <div className='datatable'>
                <Datatable/>
             </div>
       
    </div>
    </div>
  )
}

export default List