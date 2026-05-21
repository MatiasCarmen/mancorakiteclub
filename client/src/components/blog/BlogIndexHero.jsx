import FullscreenHero from "../ui/FullscreenHero.jsx"

function BlogIndexHero({ featuredPost }) {
  return (
    <FullscreenHero
      as="section"
      eyebrow="The Peru Ocean Journal"
      title="Premium surf and kitesurf stories that all point back to Mancora"
      subtitle="Long lefts, wind windows, route design, and honest comparisons across Peru."
      slides={[
        {
          desktopSrc: featuredPost.heroImage,
          mobileSrc: featuredPost.mobileImage || featuredPost.heroImage,
          alt: featuredPost.title,
          imageClassName: 'object-[52%_center] md:object-center',
        },
      ]}
      contentClassName="max-w-3xl md:max-w-4xl"
      actions={[
        {
          to: `/blog/${featuredPost.slug}`,
          label: 'Read the featured guide',
        },
        {
          to: '/',
          label: 'Explore Mancora',
        },
      ]}
    />
  )
}

export default BlogIndexHero
