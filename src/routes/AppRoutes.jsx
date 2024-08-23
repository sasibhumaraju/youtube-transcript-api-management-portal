import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import YourAPI from '../pages/YourAPI/YourAPI'


function AppRoutes() {
  return (
    
       <Routes>
         <Route path='/home' element={<Home/>} />
         <Route path='/your-api' element={<YourAPI/>} />
         {/* <Route path='/login' element={ <Dialog><Login/></Dialog> } /> */}
         <Route path='*' element={<Navigate to="/home"/>}/>
       </Routes>
  )
}

export default AppRoutes
