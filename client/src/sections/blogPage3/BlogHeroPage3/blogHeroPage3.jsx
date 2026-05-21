import { componentImages } from '../../../config/images.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"

const { heroImg, heroMobileImg } = componentImages["sections/blogPage3/BlogHeroPage3/blogHeroPage3.jsx"]
function BlogHeroPage3() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Surf & Wind Experience"
      title="Chicama, Peru: The Longest Wave In The World"
      subtitle="Turn Chicama into the ultimate surf and wind experience by combining it with Mancora."
      slides={[
        {
          desktopSrc: heroImg,
          mobileSrc: heroMobileImg,
          alt: 'Chicama Peru longest wave',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default BlogHeroPage3
