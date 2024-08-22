import Navbar from "./components/Navbar/Navbar"
import Nav from "./layouts/Nav"
import Main from './layouts/main'
import AsciiLogoArt from './utils/AsciiLogoArt'
import styles from './App.module.css'
import AppRoutes from "./routes/AppRoutes"


AsciiLogoArt()
function App() {
  

  return (<div className={styles.app}> 
    <Nav>
      <Navbar></Navbar>
    </Nav>
    <Main>
      <AppRoutes/>
    </Main>
  </div> )
}

export default App
