import styles from './YourAPI.module.css'

function YourAPI() {
 const cnt =  `
Generate Your API Key
To start using the YouTube Transcripts API, you'll need to generate a unique API key. Follow the steps below to get your key:

Sign Up / Log In:
If you don't have an account, sign up by providing your details. If you already have an account, log in to access your dashboard.

Navigate to the API Keys Section:
Once logged in, go to the "API Keys" section in your dashboard.

Generate API Key:
Click on the "Generate API Key" button. Your unique API key will be created and displayed. Make sure to store this key securely, as it will be used to authenticate your API requests.

Manage Your API Key:
You can view, regenerate, or revoke your API key at any time from the "API Keys" section.`
  return (
    <div className={styles.api}>
      <div className={styles.container}> 
        <div className={styles.heading}>Get Started with the YouTube Transcripts API </div>
        <div>To start using the YouTube Transcripts API, you'll need to generate a unique API key. Follow the steps below to get your key:</div>
        <ul>
        <li>Sign Up / Log In:
        If you don't have an account, sign up by providing your details. If you already have an account, log in to access your dashboard.</li>
        <li>Generate API Key:
        Click on the "Generate API Key" button. Your unique API key will be created and displayed. Make sure to store this key securely, as it will be used to authenticate your API requests.</li>
        </ul>

        <div className={styles.heading}>Using the API Key</div>
        <div>Once you have your API key, you can start making requests to the YouTube Transcripts API. Follow these steps to integrate the API into your website or application:</div>
        <ul>
          <li>Include the API Key in Your Request Headers:
          Add the API key to the Authorization header of your HTTP requests. Here's an example in cURL:</li>
        {/* </ul> */}

        {/* <div className={styles.heading}>API Endpoint and Parameters:</div> */}
        {/* <div>Once you have your API key, you can start making requests to the YouTube Transcripts API. Follow these steps to integrate the API into your website or application:</div> */}
        {/* <ul> */}
          <li>Endpoint: https://api.yourwebsite.com/v1/transcripts</li>
          <li>Required Parameter: video_id - The ID of the YouTube video for which you want the transcript.</li>
          <li>The API will return a JSON response with the transcript data. You can parse this response and use it in your application as needed.</li>
        </ul>

        {/* <div className={styles.heading}>Example API request </div>
        <code>
          owbefdb
        </code>
          
        <div className={styles.heading}>Your YouTube Transcripts API key  </div>
        <code><pre>

          </pre></code> */}
      </div>
    </div>
  )
}

export default YourAPI
