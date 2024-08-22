import styles from './ProgressBar.module.css'

function ProgressBar() {
  return (
    <div className={styles.progress_bar} >
        <span className={styles.progress_bar_animation_box}></span>
    </div>
  )
}

export default ProgressBar
