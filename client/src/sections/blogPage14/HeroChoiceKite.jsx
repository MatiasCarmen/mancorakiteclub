import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { CHOICE_DATA14 } from "./introData14"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage14/HeroChoiceKite.jsx"]
function HeroChoiceKite() {
  const { hero } = CHOICE_DATA14

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
          alt: 'Wingfoil and kitesurf comparison',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroChoiceKite
