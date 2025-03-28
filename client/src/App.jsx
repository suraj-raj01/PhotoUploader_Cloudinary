import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LayOut from './LayOut'
import Home from './pages/Home'
import Display from './pages/Display'
import InsertPhoto from './pages/InsertPhoto'
import Login from './Authentication/Login'
import Registration from './Authentication/Registration'
import Dashbaord from './Admin/Dashbaord'
import UpdateImage from './Admin/UpdateImage'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayOut/>}>
          <Route index element={<Home/>}/>
          <Route path='home' element={<Home/>}>
           <Route path='insertphoto' element={<InsertPhoto/>}/>
          </Route>
          <Route path='display' element={<Display/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='registration' element={<Registration/>}/>
          <Route path='admindashboard' element={<Dashbaord/>}>
            {/* <Route index element={<UpdateImage/>}/> */}
            <Route path='updateimage' element={<UpdateImage/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
