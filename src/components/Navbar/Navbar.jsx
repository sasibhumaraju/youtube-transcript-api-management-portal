import styles from "./Navbar.module.css"
import logo from '../../assets/logo2.png'
import {  NavLink } from 'react-router-dom'
import Font from 'react-font'
import Login from '../../pages/Login/Login'
import useDialog from '../../hooks/useDialog'
import ProgressBar from "../ProgressBar/ProgressBar"
import { useEffect, useState } from "react"

function Navbar() {
  const [openLogin,element] = useDialog(<Login/>)
  const [progressBar, toggleProgressBar] = useState(false);
  useEffect(()=>{
    progressBar && setTimeout(()=>{toggleProgressBar(!progressBar)},700)
  },[progressBar])

  return (
    <Font family='Balsamiq Sans' weight={700}>
    <div className={`${styles.navbar}`}>
      {progressBar && <ProgressBar/>}
      <span onClick={toggleProgressBar}>
        <NavLink to="/">
        <img className={styles.logo} src={logo}></img>
        </NavLink>
      </span>
      <div>
        <span onClick={toggleProgressBar}>
          <NavLink to="/" className={styles.link_style}>home</NavLink>
        </span>
        <span onClick={toggleProgressBar}>
          <NavLink to="your-api" className={styles.link_style}>your api</NavLink>
        </span>
        <span>
           
            <button type='sumbit' onClick={openLogin} className={` ${styles.login_button}`}>LOGIN</button>
        </span>
      </div>
    </div>
    {element}
    </Font>
  )
}

export default Navbar
