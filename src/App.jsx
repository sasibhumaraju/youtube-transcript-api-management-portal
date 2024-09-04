import Navbar from "./components/Navbar/Navbar"
import NavLayout from "./layouts/NavLayout"
import Main from './layouts/MainLayout'
import AsciiLogoArt from './utils/AsciiLogoArt'
import styles from './App.module.css'
import AppRoutes from "./routes/AppRoutes"
import FooterLayout from "./layouts/FooterLayout"
import Footer from "./components/Footer/Footer"
import Font from "react-font"
import SocialService from "./components/socialService/socialService"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

AsciiLogoArt()
function App() {
  

  return (<div className={styles.app}> 
    <NavLayout>
      <Navbar></Navbar>
    </NavLayout>
    {/* {JSON.stringify(auth.currentUser.photoURL)} */}
    <Main>
      <Font family='Balsamiq Sans'>
        <AppRoutes/>
         <SocialService/>
      </Font>
    </Main>
    <FooterLayout>
      <Footer/>
    </FooterLayout>
    <ToastContainer 
    position="bottom-center"
    autoClose={2000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover={false}
    theme="dark"/>
  </div> )
}

export default App
