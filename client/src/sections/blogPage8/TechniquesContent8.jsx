import { INTRO_DATA8 } from "./introData8";
import { resolveImage } from "../../config/images.js";

const SWELL_IMAGE = resolveImage("fotos trip/DSC07145.webp");
const TURNS_IMAGE = resolveImage("fotos trip/DSC02043.webp");

function TechniquesContent8() {
    const [swell, turns] = INTRO_DATA8.sections;

    return (
        <div className="bg-[#031015] text-[#e6f6fd]">
            {/* Reading the Swell */}
            <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 sm:gap-10 sm:px-6 sm:py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
                <div className="group relative w-full lg:w-1/2">
                    <div className="absolute -inset-4 bg-[#132930]/50 rounded-xl blur-xl" />
                    <img src={SWELL_IMAGE} loading="lazy" className="relative z-10 w-full rounded-3xl shadow-2xl grayscale transition-all duration-700 hover:grayscale-0" alt="Swell" />
                    <div className="absolute -bottom-8 -right-8 z-20 hidden w-64 rounded-2xl border border-white/10 bg-[#132930]/80 p-6 shadow-2xl backdrop-blur-md lg:block">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="material-symbols-outlined text-[#5af8fb] text-sm">visibility</span>
                            <h4 className="font-bold text-xs tracking-widest uppercase">Focus Point</h4>
                        </div>
                        <p className="text-xs text-[#9eaeb4]">{swell.focus}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="mb-6 text-2xl font-bold italic tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                        {swell.title}<br/><span className="text-[#ff9069]">{swell.highlight}</span>
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">{swell.p1}</p>
                    <p className="text-sm leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">{swell.p2}</p>
                </div>
            </section>

            {/* Timing Your Turns */}
            <section className="bg-[#05161b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-10 lg:flex-row-reverse lg:gap-16">
                    <div className="w-full lg:w-1/2">
                        <img src={TURNS_IMAGE} loading="lazy" className="w-full rounded-3xl shadow-2xl" alt="Turns" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-6 text-2xl font-bold italic tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                            {turns.title}<br/><span className="text-[#5af8fb]">{turns.highlight}</span>
                        </h2>
                        <div className="space-y-6 text-sm leading-relaxed text-[#9eaeb4] sm:text-base md:text-lg">
                            <p>{turns.p1}</p>
                            <p><strong className="text-white uppercase text-sm block mb-1">The Bottom Turn:</strong> {turns.p2}</p>
                            <p><strong className="text-white uppercase text-sm block mb-1">The Top Turn:</strong> {turns.p3}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default TechniquesContent8;
