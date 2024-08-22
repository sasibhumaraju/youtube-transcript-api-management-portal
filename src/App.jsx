import Navbar from "./components/Navbar/Navbar"
import NavLayout from "./layouts/NavLayout"
import Main from './layouts/MainLayout'
import AsciiLogoArt from './utils/AsciiLogoArt'
import styles from './App.module.css'
import AppRoutes from "./routes/AppRoutes"
import FooterLayout from "./layouts/FooterLayout"
import Footer from "./components/Footer/Footer"
import Font from "react-font"


AsciiLogoArt()
function App() {
  

  return (<div className={styles.app}> 
    <NavLayout>
      <Navbar></Navbar>
    </NavLayout>
    <Main>
      <Font family='Balsamiq Sans'>
        <AppRoutes/>
      </Font>
    </Main>
    <FooterLayout>
      <Footer/>
    </FooterLayout>
  </div> )
}

export default App
