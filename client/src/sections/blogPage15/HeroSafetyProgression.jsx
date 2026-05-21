import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { SAFETY_DATA15 } from "./introData15"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage15/HeroSafetyProgression.jsx"]
function HeroSafetyProgression() {
  const { hero } = SAFETY_DATA15

  return (
    <FullscreenHero
      as="section"
      eyebrow={hero.tag}
      title={`${hero.title} ${hero.highlight}`}
      subtitle={hero.description}
      slides={[
        {
          desktopSrc: heroImg,
          mobileSrc: heroMobileImg,
          alt: 'Kitesurf safety and progression',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroSafetyProgression
