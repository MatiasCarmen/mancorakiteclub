import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { SEVEN_PLANS_DATA7 } from "./introData13"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage13/HeroProgressionKite.jsx"]
function HeroProgressionKite() {
  const { hero } = SEVEN_PLANS_DATA7

  return (
    <FullscreenHero
      as="section"
      eyebrow={hero.location}
      title={`${hero.title} ${hero.highlight} ${hero.subtitle}`}
      subtitle={hero.description}
      slides={[
        {
          desktopSrc: heroImg,
          mobileSrc: heroMobileImg,
          alt: 'Mancora kitesurf progression',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroProgressionKite
