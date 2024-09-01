import client from '../../store/supabaseClient'
import styles from './Login.module.css'
import { useEffect, useState } from 'react'
import gitLogo from '../../assets/icons/github.svg'
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { app, auth } from '../../store/firebaseConfig';


function Login() {
  
      const login = async () => {
          const provider = new  GithubAuthProvider(app)
          const auth = getAuth(app);
          signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result)
          // const credential = GithubAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // const user = result.user;
          }).catch((error) => {
            console.log(error)
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // const email = error.customData.email;
          // const credential = GithubAuthProvider.credentialFromError(error);
          });
      }

  const logout = async ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    
  //  console.log(client.auth.getUser())
  }, [])
 
  return (
    <div className={styles.login}>
      <div className={styles.heading} >Sign in to GitHub <img src={gitLogo} alt="github logo"></img> to continue to transcripts api</div>
      <button className={styles.button} onClick={login}>💨 Sign in</button>
      <div className={styles.terms_text} >By signing up, you agree to Transcripts Api's Terms of Service & Privacy Policy.</div>
      {/* {JSON.stringify(auth.currentUser)} */}
      
    </div>
  )
}

export default Login
