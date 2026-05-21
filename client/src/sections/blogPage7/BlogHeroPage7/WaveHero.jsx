import { componentImages } from '../../../config/images.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage7/BlogHeroPage7/WaveHero.jsx"]
function WaveHero() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Wave Progression"
      title="Why Mancora Is Different"
      subtitle="Not just another kitesurf spot. A place designed for real wave progression."
      slides={[
        {
          desktopSrc: heroImg,
          mobileSrc: heroMobileImg,
          alt: 'Mancora wave kitesurf progression',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default WaveHero
