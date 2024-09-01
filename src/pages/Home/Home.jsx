import { Navigate, useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import SocialService from '../../components/socialService/socialService';

function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.title}>Unlock YouTube's <div className={styles.yellow}>transcripts</div>  </div>
      <p>The YouTube Transcripts API is your gateway to extracting valuable insights from video content effortlessly. With the YouTube Transcripts API, you can dive straight into the content you care about. Fetch transcripts, summarize, and analyze without scrubbing through hours of footage.</p>
      <button onClick={()=>navigate("/your-api")} className={styles.start_button}>start here</button>

     
      {/* <div className={styles.box}><b>Hard Truth  </b></div> */}
    </div>
  )
}

export default Home
