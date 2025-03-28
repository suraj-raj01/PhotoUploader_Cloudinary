import React from 'react'
import {Outlet} from "react-router-dom"
const Dashbaord = () => {
  return (
    <div>
     <h1>Dashbaord</h1> 
     <Outlet/>
    </div>
  )
}

export default Dashbaord
