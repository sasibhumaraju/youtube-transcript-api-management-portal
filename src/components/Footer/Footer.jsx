import Font from 'react-font'
import styles from './Footer.module.css'
import github from '../../assets/icons/github.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'



function Footer() {
  return (
    <Font family='Balsamiq Sans'  >
        <div className={styles.footer}>
            <div>Need help? Email <a href='mailto:sasi.bhumaraju@gmail.com'><b>sasi.bhumaraju@gmail.com</b></a></div>
            <div>
                <img src={github} alt='git' className={styles.icon} ></img>
                <img src={instagram} alt='instagram' className={styles.icon} ></img>
                <img src={linkedin} alt='linkedin' className={styles.icon} ></img>
                <img src={twitter   } alt='twitter' className={styles.icon} ></img>
            </div>
            <div>
               <b style={{color:"white"}}> HELPFUL LINKS</b>
            </div>
            <div>
                Home | API | Privacy | Terms | Repo
            </div>
            <div>
                made with 💖 @sasibhumaraju
            </div>
            
        </div>
    </Font>

  )
}

export default Footer
