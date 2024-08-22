import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import YourAPI from '../pages/YourAPI/YourAPI'


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
