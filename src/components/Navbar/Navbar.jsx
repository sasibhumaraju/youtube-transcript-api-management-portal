import styles from "./Navbar.module.css"
import logo from '../../assets/logo2.png'
import {  NavLink, useNavigate } from 'react-router-dom'
import Font from 'react-font'
import Login from '../../pages/Login/Login'
import useDialog from '../../hooks/useDialog'
import ProgressBar from "../ProgressBar/ProgressBar"
import { useEffect, useState } from "react"
import { auth } from "../../store/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth"
import { current } from "@reduxjs/toolkit"

function Navbar() {
  const [openLogin,closeLogin,element] = useDialog(Login)
  const [progressBar, toggleProgressBar] = useState(true);
  const [profileUrl, setprofileUrl] = useState(null);
  const [showLoginButton, setShowLoginButton] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    progressBar && setTimeout(()=>{toggleProgressBar(!progressBar)},1000)
  },[progressBar])
  useEffect(()=>{
    getCurrentUser()
  },[])


  const getCurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setprofileUrl(user.photoURL)
        closeLogin()
        setShowLoginButton(false)
      } else {
        setprofileUrl(null)
        setShowLoginButton(true)
      }
    })
  }

  return (
    <Font family='Balsamiq Sans' weight={700}>
    <div className={`${styles.navbar}`}>
      {progressBar && <ProgressBar/>}
      <div onClick={toggleProgressBar}>
        <NavLink to="">
        <img className={styles.logo} src={logo}></img>
        </NavLink>
      </div>
      <div className={styles.links}>
        <div onClick={toggleProgressBar}> 
          <NavLink to="home" 
             className={styles.active}
             ><b>Home</b></NavLink>
        </div>
        <div onClick={toggleProgressBar}>
          <NavLink to="your-api" className={styles.active}><b>API</b></NavLink>
        </div>
        <div onClick={toggleProgressBar}>
          { (profileUrl)?  <img className={styles.profile_pic} onClick={()=>navigate("profile")} src={profileUrl}></img> : null}
          { (showLoginButton)? <button disabled={profileUrl!==null} type='sumbit' onClick={openLogin} className={` ${styles.login_button}`}><b>LOGIN</b></button>: null}
        </div>
      </div>
    </div>
    {element}
    </Font>
  )
}

export default Navbar
