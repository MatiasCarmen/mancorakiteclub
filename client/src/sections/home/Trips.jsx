import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function Trips() {
  return (
    <section id="trips" className="relative bg-background-light py-16 sm:py-20 lg:py-28 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Build Your Trip
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              Create your own custom experience.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            Choose your classes, accommodation, equipment, and extras. Build the trip that fits your wind, level and time.
          </p>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            to="/build"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition duration-300 hover:bg-primary dark:bg-white dark:text-slate-950 dark:hover:bg-primary dark:hover:text-white sm:w-auto"
          >
            Build Your Trip
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Trips
