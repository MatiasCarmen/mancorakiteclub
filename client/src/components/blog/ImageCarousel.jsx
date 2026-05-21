import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import MotionReveal from "./MotionReveal.jsx"

function ImageCarousel({ title = "Visual Journal", images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (images.length < 2) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % images.length)
    }, 1000)

    return () => window.clearInterval(timer)
  }, [images.length])

  if (!images.length) {
    return null
  }

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const goNext = () => {
    setDirection(1)
    setActiveIndex((current) => (current + 1) % images.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }

  return (
    <MotionReveal className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_72px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/[0.65]">Gallery</p>
          <h2 className="mt-2 font-display text-3xl text-white">{title}</h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label="Previous image"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={goNext}
            className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
            aria-label="Next image"
          >
            Next
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
        <div className="aspect-[4/5] overflow-hidden bg-slate-950 md:aspect-[16/10]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.picture
              key={images[activeIndex].src}
              className="h-full w-full object-cover"
              initial={{ opacity: 0, x: direction > 0 ? 36 : -36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -36 : 36 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <source media="(min-width: 768px)" srcSet={images[activeIndex].src} />
              <img
                src={images[activeIndex].mobileSrc || images[activeIndex].src}
                alt={images[activeIndex].alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.picture>
          </AnimatePresence>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent px-6 py-5">
          <p className="text-sm leading-6 text-white/[0.85]">{images[activeIndex].alt}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((image, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => goTo(index)}
              className={`overflow-hidden rounded-2xl border transition ${
                isActive
                  ? "border-cyan-300/60 ring-1 ring-cyan-300/40"
                  : "border-white/10 hover:border-white/20"
              }`}
              aria-label={`Open image ${index + 1}`}
            >
              <picture>
                <source media="(min-width: 768px)" srcSet={image.src} />
                <img
                  src={image.mobileSrc || image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover md:aspect-[4/3]"
                />
              </picture>
            </button>
          )
        })}
      </div>
    </MotionReveal>
  )
}

export default ImageCarousel
