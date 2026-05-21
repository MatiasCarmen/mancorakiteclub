import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { SAFARI_DATA10 } from "./introData10"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage10/HeroSafariKite.jsx"]
function HeroSafariKite() {
  const { hero } = SAFARI_DATA10

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
          alt: 'Peru kite safari',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroSafariKite
