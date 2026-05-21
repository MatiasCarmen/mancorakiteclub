import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { WHALE_SEASON_DATA12 } from "./introData12"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage12/HeroWhaleSeason.jsx"]
function HeroWhaleSeason() {
  const { hero } = WHALE_SEASON_DATA12

  return (
    <FullscreenHero
      as="section"
      eyebrow={hero.location}
      title={`${hero.title} ${hero.highlight}`}
      subtitle={hero.description}
      slides={[
        {
          desktopSrc: heroImg,
          mobileSrc: heroMobileImg,
          alt: 'Mancora whale season',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroWhaleSeason
