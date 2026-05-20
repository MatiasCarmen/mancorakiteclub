import { motion } from "framer-motion"

function RentGear() {
  const GEAR = [
    { type: "Kitesurf Gear", hour: "$30 USD", day: "$60 USD", days3: "$160 USD", days7: "$350 USD" },
    { type: "Wingfoil Setup", hour: "-", day: "$60 USD", days3: "$160 USD", days7: "$350 USD" },
    { type: "Surfboard", hour: "-", day: "$15 USD", days3: "$40 USD", days7: "$80 USD" },
    { type: "SUP Board", hour: "-", day: "$30 USD", days3: "$75 USD", days7: "$150 USD" }
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#0f2e2c] to-[#0A0F14] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 max-w-4xl text-center sm:mb-20"
      >
        <h2 className="text-2xl font-bold tracking-[0.2em] sm:text-3xl md:text-4xl lg:text-5xl">
          RENT GEAR
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
          Premium and updated equipment for Kitesurf, Wingfoil, and Surfing.
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0c2523] border border-white/10 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm sm:text-base whitespace-nowrap">
            <thead className="bg-[#DEFF9A]/10 text-[#DEFF9A]">
              <tr>
                <th className="px-6 py-5 font-semibold">Equipment</th>
                <th className="px-6 py-5 font-semibold">1 Hour</th>
                <th className="px-6 py-5 font-semibold">1 Day</th>
                <th className="px-6 py-5 font-semibold">3 Days</th>
                <th className="px-6 py-5 font-semibold">7 Days</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {GEAR.map((item, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="hover:bg-white/5 transition"
                >
                  <td className="px-6 py-5 font-medium">{item.type}</td>
                  <td className="px-6 py-5 text-white/80">{item.hour}</td>
                  <td className="px-6 py-5 text-white/80">{item.day}</td>
                  <td className="px-6 py-5 text-white/80">{item.days3}</td>
                  <td className="px-6 py-5 text-white/80">{item.days7}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default RentGear
