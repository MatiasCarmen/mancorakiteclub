import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"
import { createHeroSlides, HERO_SLIDE_PRESETS } from "../../../lib/fullscreenHeroSlides.js"
import { BLOGHERO_IMAGE, BLOGHERO_MOBILE_IMAGE } from "../BlogLayout/blogContent.js"

const blogHeroSlides = createHeroSlides({
  desktop: [BLOGHERO_IMAGE, ...HERO_SLIDE_PRESETS.blog.desktop],
  mobile: [BLOGHERO_MOBILE_IMAGE, ...HERO_SLIDE_PRESETS.blog.mobile],
  alt: 'Kite surfer jumping over waves in Mancora',
  imageClassName: 'object-[52%_center] md:object-center',
})

function BlogHero() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="The Journal"
      title="Kitesurfing Peru"
      subtitle="Wave riding and ocean stories from the wind, waves, and culture of northern Peru."
      slides={blogHeroSlides}
    />
  )
}

export default BlogHero
