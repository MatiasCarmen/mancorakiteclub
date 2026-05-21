import { componentImages } from '../../config/images.js'
import FullscreenHero from "../../components/ui/FullscreenHero.jsx"
import { INTRO_DATA8 } from "./introData8"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage8/HeroTechniquesKite.jsx"]
function HeroTechniquesKite() {
  return (
    <FullscreenHero
      as="section"
      eyebrow={INTRO_DATA8.category}
      title={`${INTRO_DATA8.hero.title} ${INTRO_DATA8.hero.highlight}`}
      subtitle={INTRO_DATA8.hero.description}
      slides={[
        {
          desktopSrc: heroImg,
          mobileSrc: heroMobileImg,
          alt: 'Kitesurfing waves technique',
          imageClassName: 'object-[54%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroTechniquesKite
