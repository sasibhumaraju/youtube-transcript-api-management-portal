import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import YourAPI from '../pages/YourAPI'
import Profile from '../pages/Profile'
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
