import { Link } from "react-router-dom"
import MotionReveal from "./MotionReveal.jsx"

function RelatedPostsSidebar({ currentPost, relatedPosts = [] }) {
  return (
    <MotionReveal className="lg:sticky lg:top-28" delay={0.1}>
      <aside className="space-y-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/[0.65]">
            Why this page exists
          </p>
          <h2 className="mt-3 font-display text-2xl text-white">Every route leads north</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300/[0.82]">
            This journal is designed to help readers compare Peru honestly and still understand why Mancora is the easiest place to stay longer, ride more, and convert intent into a real trip.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/[0.65]">
            Quick snapshot
          </p>
          <div className="mt-5 space-y-4">
            {currentPost.quickFacts.map((fact) => (
              <div key={fact.label} className="border-b border-white/[0.08] pb-4 last:border-b-0 last:pb-0">
                <p className="text-[11px] uppercase tracking-[0.26em] text-slate-400">{fact.label}</p>
                <p className="mt-2 text-sm leading-7 text-white/90">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/[0.65]">
            Related reads
          </p>
          <div className="mt-5 space-y-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex gap-4 rounded-[1.4rem] border border-white/[0.08] bg-slate-950/40 p-3 transition hover:border-cyan-300/30 hover:bg-slate-950/70"
              >
                <picture className="h-20 w-20 flex-none overflow-hidden rounded-2xl">
                  <source media="(min-width: 768px)" srcSet={post.desktopImage || post.heroImage} />
                  <img
                    src={post.mobileImage || post.heroImage}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </picture>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-100/60">
                    {post.category}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white transition group-hover:text-cyan-200">
                    {post.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </MotionReveal>
  )
}

export default RelatedPostsSidebar
