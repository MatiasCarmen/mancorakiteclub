import { Link } from "react-router-dom"

function SidebarPostItem({ title, image, desktopImage, mobileImage, slug }) {
  const desktopSrc = desktopImage || image
  const mobileSrc = mobileImage || desktopSrc

  return (
    <Link
      to={`/blog/${slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)]"
    >
      <div className="h-16 w-16 flex-none overflow-hidden rounded-xl bg-slate-200">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrc} />
          <img
            src={mobileSrc}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </picture>
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700/70">
          Trending Read
        </p>
        <p className="mt-2 text-sm font-semibold leading-5 text-slate-900 transition group-hover:text-cyan-700">
          {title}
        </p>
      </div>

      <span className="text-lg text-slate-300 transition group-hover:text-cyan-600">
        &rsaquo;
      </span>
    </Link>
  )
}

export default SidebarPostItem
