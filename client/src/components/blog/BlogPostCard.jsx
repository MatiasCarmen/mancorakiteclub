import { Link } from "react-router-dom"
import MotionReveal from "./MotionReveal.jsx"

function BlogPostCard({ post, featured = false, delay = 0 }) {
  const desktopSrc = post.desktopImage || post.heroImage
  const mobileSrc = post.mobileImage || desktopSrc

  return (
    <MotionReveal delay={delay} className={featured ? "lg:col-span-2 lg:row-span-2" : ""}>
      <Link
        to={`/blog/${post.slug}`}
        className="group block h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_18px_52px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-cyan-300/25 hover:bg-white/[0.07]"
      >
        <div className={`overflow-hidden ${featured ? "aspect-[4/5] md:aspect-[16/10]" : "aspect-[4/5] md:aspect-[4/3]"}`}>
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopSrc} />
            <img
              src={mobileSrc}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </picture>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-cyan-100/[0.65]">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>{post.readTime}</span>
          </div>
          <h2 className={`mt-4 font-display leading-tight text-white transition group-hover:text-cyan-200 ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
            {post.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300/[0.82]">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span>{post.location}</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>{post.date}</span>
          </div>
        </div>
      </Link>
    </MotionReveal>
  )
}

export default BlogPostCard
