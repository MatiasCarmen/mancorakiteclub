import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { WHALE_DATA11 } from "./introData11"

const { whaleHeroImg, whaleHeroMobileImg } = componentImages["sections/blogPage11/HeroWhaleKite.jsx"]
function HeroWhaleKite() {
  const { hero } = WHALE_DATA11

  return (
    <FullscreenHero
      as="section"
      eyebrow={hero.tag}
      title={hero.title}
      subtitle={hero.subtitle}
      slides={[
        {
          desktopSrc: whaleHeroImg,
          mobileSrc: whaleHeroMobileImg,
          alt: 'Kitesurfing during whale season',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroWhaleKite
