import React from 'react'
import "./datatable.scss"
import { DataGrid   } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatabalesource'
import { Link } from 'react-router-dom';

import { } from "@mui/icons-material"



const Datatable = () => {

     const actionColumn = [{field:"action",headerName:"Action",width:200, renderCell:()=>{
      return (
        <div className='callAction'>
             <Link to="/users/test" style={{textDecoration:"none"}}>
               <div className='viewButton'>view</div>
             </Link>
             <div className='DeleteButton'>Delete </div>
        </div>
      )
     }}]
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add New User 
        <Link to='/users/new' style={{textDecoration:"none"}} className='Link'>
          Add New
        </Link>
      </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOption={[9]}
        checkboxSelection
        
      />
    </div>
  )
}

export default Datatable