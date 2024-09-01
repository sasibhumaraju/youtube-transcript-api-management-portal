import styles from "./Card.module.css"

export default function Card({imgSrc,heading, subHeading, link}) {
  return (
    <a href={link}>
    <div className={styles.card} >
        <div ><img className={styles.img} src={imgSrc} alt=""></img></div>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.sub_heading}>{subHeading}</div>
    </div>
    </a>
  )
}
