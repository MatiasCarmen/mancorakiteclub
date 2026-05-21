import FullscreenHero from "../../components/ui/FullscreenHero.jsx"

function ArticleHeroBase({ eyebrow, title, description, meta = [], image, mobileImage, imageAlt }) {
  return (
    <FullscreenHero
      as="section"
      eyebrow={eyebrow}
      title={title}
      subtitle={description}
      meta={meta}
      slides={[
        {
          desktopSrc: image,
          mobileSrc: mobileImage || image,
          alt: imageAlt || title,
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default ArticleHeroBase
