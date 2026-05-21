import { componentImages } from '../../../config/images.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage2/BlogHeroPage2/HeroSevenPlans.jsx"]
function HeroSevenPlans() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Seven Ways to Ride Peru"
      title="7 Different Ways To Experience Peru's Wind"
      subtitle="Not every rider follows the same path. Choose yours."
      slides={[
        {
          desktopSrc: heroImg,
          mobileSrc: heroMobileImg,
          alt: 'Kitesurf Peru',
          imageClassName: 'object-[54%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroSevenPlans
