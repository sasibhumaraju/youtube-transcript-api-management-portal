import styles from './Login.module.css'
import { useEffect } from 'react'
import gitLogo from '../../assets/icons/github.svg'
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { app, auth } from '../../store/firebaseConfig';
import { fetchData, insertData } from '../../store/Database';
import { SHA224 } from 'crypto-js';
import CryptoJS from 'crypto-js';
import {  toast } from 'react-toastify';


function Login() {
  
  
      // const [openSnackbar, closeSnackbar] = useSnackbar()
      const login = async () => {
          const provider = new  GithubAuthProvider(app)
          const auth = getAuth(app);
          signInWithPopup(auth, provider)
          .then(async (result) => {
            const apiKey = CryptoJS.lib.WordArray.random(32).toString();
            const emailId = result.user.email;
            const name = result.user.displayName;
            const profileUrl = result.user.photoURL;
            const { data, error } = await fetchData('api_keys',"email",emailId);
              toast("login succesful")
              {
              const userData = {
                email: emailId,
                api_key: apiKey,
                is_active: true,
                name: name,
                profile_url: profileUrl
              }
              const error = await insertData('api_keys',userData);
              console.log(error);

            }
            
            // insertData("api_keys",)
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
