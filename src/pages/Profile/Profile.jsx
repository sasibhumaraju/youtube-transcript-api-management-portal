import { onAuthStateChanged, signOut } from 'firebase/auth'
import styles from './Profile.module.css'
import { useEffect, useState } from 'react'
import { auth } from '../../store/firebaseConfig'

function Profile() {

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

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>getCurrentUser(),[])
  return (
    <div className={styles.profile}>
      <div className={styles.greeting}>Hi {user && user.displayName} </div>
      <div className={styles.email}>Account Email: {user && user.email}</div>
      <button className={styles.sign_out} onClick={signOutUser}>Sign Out</button>
    </div>
  )
}

export default Profile
