import { Link } from "react-router-dom"
import { TRENDING_POSTS } from "../../blogContent.js"

function BlogSidebar() {
  const visibleTrendingPosts = TRENDING_POSTS.slice(0, 4)

  return (
    <div className="flex flex-col gap-6">

      {/* Plan Trip Card */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-md group">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/25 blur-2xl transition duration-500 group-hover:scale-110" />
        <div className="absolute -bottom-12 left-0 h-24 w-24 rounded-full bg-slate-950/5 blur-2xl" />

        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-700/70">
            Plan Your Trip
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
            Build the Peru trip that fits your wind, level, and time.
          </h3>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Skip the generic research loop and move straight into a route that matches your riding goals, stay style, and best travel window.
          </p>

          <Link
            to="/build"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-cyan-700"
          style={{marginLeft:53}}>
            Start Planning
          </Link>
        </div>
      </section>

      {/* Trending Posts */}
      <section className="h-fit rounded-[1.75rem] border border-slate-200 bg-white p-6 pb-8 shadow-[0_20px_38px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-200 pb-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-700/70">
            Most Opened
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
            Trending Posts
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Stories readers use to compare wind, travel flow, and the strongest routes into northern Peru.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-4">
          {visibleTrendingPosts.map((post) => {
            const desktopSrc = post.desktopImage || post.image
            const mobileSrc = post.mobileImage || desktopSrc

            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-200">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={desktopSrc} />
                    <img
                      src={mobileSrc}
                      alt={post.alt || post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </picture>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-700/70">
                    Trending Read
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-5 text-slate-900 transition group-hover:text-cyan-700">
                    {post.title}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

    </div>
  )
}

export default BlogSidebar
