export const SEVEN_PLANS_DATA7 = {
    hero: {
        location: "Peru / Mancora",
        title: "7 Nights in Máncora:",
        highlight: "The Progression",
        subtitle: "Blueprint",
        description: "A high-intensity, 7-day editorial itinerary designed for intermediate riders to shatter plateaus. Master stance, wave timing, and technical loops."
    },
    techStats: [
        { label: "Wind Velocity", value: "15-25", unit: "kts", icon: "air", color: "text-[#5af8fb]", desc: "Consistent thermal winds. Cleanest flow arriving mid-afternoon." },
        { label: "Water Temp", value: "18-20", unit: "°C", icon: "water_drop", color: "text-[#ff9069]", desc: "Humboldt Current influence. Requires adequate thermal protection." },
        { label: "Prime Season", value: "Aug", unit: "-Oct", icon: "calendar_month", color: "text-white", desc: "Peak wind probability aligning with primary swell windows." }
    ],
    itinerary: [
        {
            days: "Day 1-2",
            icons: ["looks_one", "looks_two"],
            title: "Foundation at Máncora Point",
            description: "Morning uncrowded surf sessions to read the break. Afternoon wind shift activates the kite sessions. Focus on dialing in your stance against the Pacific's raw energy.",
            targets: ["Analyze swell direction and point break mechanics.", "Stance correction: Weight distribution on directional boards."],
            image: "fotos clases/DSC05719.webp",
            isReversed: false
        },
        {
            days: "Day 3",
            icons: ["looks_3"],
            title: "Los Organos Expedition",
            description: "A shift in perspective. Morning expedition for humpback whale observation to understand the marine ecosystem. Afternoon features technical kiting in shifting currents.",
            image: "fotos trip/DSC04250.webp",
            isReversed: true
        },
        {
            days: "Day 4-5",
            icons: ["looks_4", "looks_5"],
            title: "The Vichayito Downwinder",
            description: "The core of the progression plan. A grueling, beautiful downwind run pushing endurance. This is where technical kite loops are forged under pressure.",
            proTip: "Commit entirely. The hesitation is where control is lost. Initiate the loop as you reach the wave's apex to generate forward drive.",
            image: "fotos home/DSC00406.webp",
            isReversed: false
        }
    ],
    loadout: {
        quiver: {
            title: "Quiver Specs",
            desc: "The conditions demand versatility. Bring a fast, responsive kite setup to handle gusty sections.",
            tags: ["5M Kite", "7M Kite", "9M Kite"]
        },
        armor: {
            title: "Thermal Armor",
            desc: "Do not underestimate the Humboldt Current. Core warmth is critical for endurance during the 4-hour downwinders.",
            tags: ["3/2mm Wetsuit", "Booties Optional"]
        }
    }
};
