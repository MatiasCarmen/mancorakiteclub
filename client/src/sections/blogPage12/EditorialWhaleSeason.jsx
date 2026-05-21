import { WHALE_SEASON_DATA12 } from "./introData12";
import { resolveImage } from "../../config/images.js";

const MORNING_IMAGE = resolveImage("fotos trip/DSC04260.webp");
const MORNING_MOBILE_IMAGE = resolveImage("fotos trip/DSC04250.webp");
const AFTERNOON_IMAGE = resolveImage("fotos home/DSC04150.webp");
const AFTERNOON_MOBILE_IMAGE = resolveImage("fotos home/DSC04249 2.webp");

function EditorialWhaleSeason() {
    const [morning, afternoon] = WHALE_SEASON_DATA12.sections;

    return (
        <section className="py-24 px-8 lg:px-16 bg-[#031015]">
            <div className="max-w-7xl mx-auto space-y-32">
                
                {/* 01. Morning Watch */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#5af8fb]/5 rounded-full blur-3xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tighter uppercase italic">
                            {morning.id}. {morning.title}
                        </h2>
                        <ul className="space-y-8">
                            {morning.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <span className="material-symbols-outlined text-[#5af8fb] mt-1 group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <div>
                                        <h3 className="font-bold text-white text-lg tracking-tight uppercase">{item.label}</h3>
                                        <p className="text-[#9eaeb4] mt-1 text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:translate-x-8 lg:-translate-y-8 border border-white/5">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={MORNING_IMAGE} />
                            <img src={MORNING_MOBILE_IMAGE} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Morning" />
                        </picture>
                    </div>
                </div>

                <div className="h-px w-full bg-white/5" />

                {/* 02. Afternoon Drift */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:-translate-x-8 lg:translate-y-8 border border-white/5">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={AFTERNOON_IMAGE} />
                            <img src={AFTERNOON_MOBILE_IMAGE} className="w-full h-full object-cover" alt="Afternoon" />
                        </picture>
                    </div>
                    <div className="relative">
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#ff9069]/5 rounded-full blur-3xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tighter uppercase italic">
                            {afternoon.id}. {afternoon.title}
                        </h2>
                        <ul className="space-y-8">
                            {afternoon.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <span className="material-symbols-outlined text-[#ff9069] mt-1 group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <div>
                                        <h3 className="font-bold text-white text-lg tracking-tight uppercase">{item.label}</h3>
                                        <p className="text-[#9eaeb4] mt-1 text-sm font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default EditorialWhaleSeason;
