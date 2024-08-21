import React from 'react'
import styles from "../styles/Navbar.module.css"
import logo from '../assets/logo4.png'
import { Link, NavLink } from 'react-router-dom'
import Font from 'react-font'
import Dialog from '../layouts/Dialog'
import Login from '../pages/Login'
import useDialog from '../hooks/useDialog'


function Navbar() {
  const [openLogin,element] = useDialog(<Login/>)
 

  return (
    <Font family='Balsamiq Sans' weight={700}>
    <div className={`${styles.navbar}`}>
      <span>
        <NavLink to="/">
        <img className={styles.logo} src={logo}></img>
        </NavLink>
      </span>
      <div>
        <span>
          <NavLink to="/" className={styles.link_style}>home</NavLink>
        </span>
        <span>
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
