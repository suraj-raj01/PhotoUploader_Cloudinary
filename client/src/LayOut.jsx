import React from 'react'
import TopNav from './Components/TopNav'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div>
      <TopNav/>
      <div id="outlet">
      <Outlet/>
      </div>
    </div>
  )
}

export default LayOut
