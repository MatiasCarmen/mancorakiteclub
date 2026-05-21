export const CHOICE_DATA14 = {
    hero: {
        tag: "Technical Analysis",
        title: "Wingfoil vs Kitesurf:",
        highlight: "The Peruvian Choice",
        description: "A technical analysis of wind intensity, wave dynamics, and rider progression in the Humboldt Current.",
        anchors: [
            { label: "Water Temp", value: "18-20°C", sub: "Constant" },
            { label: "Wind Vector", value: "15-25", unit: "kts", sub: "Baseline" }
        ]
    },
    intro: {
        title: "The Kinetic Duality of the Humboldt Current",
        p1: "Peru's coastline offers a mechanical perfection rarely seen elsewhere. Driven by the cold, relentless push of the Humboldt Current, the thermal winds and endless pointbreaks present a unique laboratory for wind-driven water sports.",
        p2: "We analyze the 'kinetic duality' of these disciplines. While kitesurfing harnesses the atmospheric boundary layer for vertical power, wingfoiling taps into surface energy to surf long swells with minimal drag."
    },
    factors: [
        {
            id: "wind",
            icon: "air",
            label: "Wind Intensity",
            title: "The Power Curve Analysis",
            desc: "Efficiency profiles diverge sharply based on wind knots. Wingfoiling finds its sweet spot in the 12-18 kts range, while kitesurfing reaches peak performance in the 18-25+ kts spectrum.",
            zones: [
                { name: "Wingfoil Zone", value: "12-18 kts", color: "border-t-[#5af8fb]/50 text-[#5af8fb]" },
                { name: "Kitesurf Zone", value: "18-25+ kts", color: "border-t-[#ff9069]/50 text-[#ff9069]" }
            ],
            image: "fotos clases/DSC07693.webp"
        },
        {
            id: "waves",
            icon: "tsunami",
            label: "Wave Dynamics",
            title: "Hydrodynamic Extraction",
            desc: "For the endless lefts of Pacasmayo, the wingfoil is unmatched. It allows the rider to neutralize wind drag and surf swell energy freely. Kitesurfing offers high-speed vertical hacking, relying on constant tension.",
            image: "fotos wingfoil/DSC00021.webp",
            isReversed: true
        }
    ],
    progression: {
        title: "The Intermediate Transition",
        desc: "Shifting between disciplines requires resetting muscle memory.",
        cards: [
            { 
                title: "To Wingfoil", 
                color: "bg-[#5af8fb]", 
                text: "Requires unlearning rigid stance. Focus shifts entirely to front-foot pressure and foil balance. The wing is merely an engine." 
            },
            { 
                title: "To Kitesurf", 
                color: "bg-[#ff9069]", 
                text: "Demands exceptional multi-tasking. Edge control must become subconscious while actively steering the kite through the power window." 
            }
        ]
    }
};
