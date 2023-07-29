import React from 'react'
import "./chart.scss"
import  AreaChart  from './AreaChart/AreaChart'

const Chart = () => {
  return (
    <div className='chart'>
      
        <div className='areaChart'>
        <AreaChart/>
        </div>
      
    </div>
  )
}

export default Chart