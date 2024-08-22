import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import YourAPI from '../pages/YourAPI/YourAPI'
import Profile from '../pages/Profile/Profile'
import Dialog from "../layouts/Dialog"

function AppRoutes() {
  return (
    
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/your-api' element={<YourAPI/>} />
         {/* <Route path='/login' element={ <Dialog><Login/></Dialog> } /> */}
       </Routes>
  )
}

export default AppRoutes
