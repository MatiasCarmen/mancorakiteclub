import { componentImages } from '../../../config/images.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"

const { heroImage, heroMobileImage } = componentImages["sections/blogPage1/BlogHeroPage1/BlogHeroPage1.jsx"]
function BlogHeroPage1() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Wave Riding Edition"
      title="The 20 World's Best Kitesurfing Wave Destinations"
      subtitle="Ranked by wave quality, wind consistency and riding experience."
      slides={[
        {
          desktopSrc: heroImage,
          mobileSrc: heroMobileImage,
          alt: 'Mancora Kitesurf',
          imageClassName: 'object-[54%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default BlogHeroPage1
