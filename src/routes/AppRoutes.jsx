import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import YourAPI from '../pages/YourAPI/YourAPI'
import Profile from '../pages/Profile/Profile'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../store/firebaseConfig'


function AppRoutes() {
  const [user,setUser] = useState(null)

  const getCurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log(user)
      } else {
        setUser(null)
      }
    })
  }
  useEffect(()=>getCurrentUser(),[])

  return (
    
       <Routes>
         <Route path='/home' element={<Home/>} />
         <Route path='/your-api' element={<YourAPI/>} />
        { user && <Route path='/profile' element={<Profile/>} />}
         {/* <Route path='/login' element={ <Dialog><Login/></Dialog> } /> */}
         <Route path='*' element={<Navigate to="/home"/>}/>
       </Routes>
  )
}

export default AppRoutes
