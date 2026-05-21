import { componentImages } from '../../../config/images.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"

const { heroImage, heroMobileImage } = componentImages["sections/blogPage5/BlogHeroPage5/HeroPeruKitesurf.jsx"]
function HeroPeruKitesurf() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Kitesurfing Peru"
      title="Peru Kitesurf: North vs South"
      subtitle="A complete guide to spots, seasons, wind logic, and choosing the right Peru kitesurf route."
      slides={[
        {
          desktopSrc: heroImage,
          mobileSrc: heroMobileImage,
          alt: 'Kitesurfer launching into a Peru wind session',
          imageClassName: 'object-[54%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroPeruKitesurf
