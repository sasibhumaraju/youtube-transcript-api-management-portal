import Card from '../Card/Card'
import styles from './SocialService.module.css'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function SocialService() {

  const cardsList = [
    {heading:"Feed a Homeless Person", subHeading: "Feed a hungry stomach and Protect the poor from malnutrition and starvation.", link:"https://thaagam.org/homeless/"},
    {heading:"Educate a Child", subHeading: "Support our Education initiative to educate homeless children living on the streets.", link: "https://thaagam.org/child_education/"},
    {heading:"Give a Egg & Milk", subHeading: "Providing eggs and milk to children is not just nourishing their bodies; it's feeding their dreams and giving them a brighter, healthier future.", link:"https://thaagam.org/egg_milk/"},
    {heading:"Feed a Stray Dog", subHeading: "Thousands of Dogs die due to Starvation everyday in India. Help us Protect them.", link:"https://thaagam.org/stray_dog/"},
    {heading:"Plant a Tree", subHeading: "Help us Protect the mother earth by planting native tree saplings.", link:"https://thaagam.org/plant_tree/"}
  ]
  return (
    <div className={styles.social_service}>
        <div className={styles.heading}>Social Service</div>
        <div className={styles.sub_heading}>
            <span>Hi, I'm @sasibhumaraju 👋, the developer behind the YouTube Transcripts API. I believe in making the world a better place 🌍, and I encourage you to engage in any of the social services below. Let’s spread happiness and positivity together! 😊✨</span>
        </div>
        
        <div className={styles.scroll_container}>
        <div className={styles.scroll_wrapper}>
            <div className={styles.scroll_content}>
                {cardsList.map((cardData,idx)=><Card key={idx} heading={cardData.heading} subHeading={cardData.subHeading} link={cardData.link}/>)}
            </div>
        </div>
        </div>
        
    </div>
  )
}
