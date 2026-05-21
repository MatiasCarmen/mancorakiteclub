import FullscreenHero from "../ui/FullscreenHero.jsx"

function ArticleHero({ post }) {
  if (!post) {
    return null
  }

  return (
    <FullscreenHero
      eyebrow={[post.category, post.readTime].filter(Boolean).join(' / ')}
      title={post.title}
      subtitle={post.description}
      meta={[post.location, post.date, post.author].filter(Boolean)}
      slides={[
        {
          desktopSrc: post.heroImage,
          mobileSrc: post.mobileImage || post.heroImage,
          alt: post.heroAlt || post.title,
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
    />
  )
}

export default ArticleHero
