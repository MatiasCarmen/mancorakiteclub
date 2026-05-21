import { componentImages } from '../../../config/images.js'
import FullscreenHero from "../../../components/ui/FullscreenHero.jsx"

const { heroImage, heroMobileImage } = componentImages["sections/blogPage6/BlogHeroPage6/HeroPacasmayo.jsx"]
function HeroPacasmayo() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Surfing Peru"
      title="Pacasmayo, Peru: The Ultimate Point Break Guide"
      subtitle="Learn when Pacasmayo works best and how to place it inside a bigger north Peru surf route."
      slides={[
        {
          desktopSrc: heroImage,
          mobileSrc: heroMobileImage,
          alt: 'Long left point break under soft Peru light',
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default HeroPacasmayo
