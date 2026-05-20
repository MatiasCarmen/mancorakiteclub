import SEO from "../components/SEO"
import ClassesHero from "../sections/ClassesPage/ClassesHero.jsx"
import ClassesIntro from "../sections/ClassesPage/ClassesIntro.jsx"
import ClassesPricing from "../sections/ClassesPage/ClassesPricing.jsx"
import ClassesBenefits from "../sections/ClassesPage/ClassesBenefits.jsx"
import ClassesSteps from "../sections/ClassesPage/ClassesSteps.jsx"
import ClassesGallery from "../sections/ClassesPage/ClassesGallery.jsx"
import EquipmentKite from "../sections/ClassesPage/equipment/EquipmentKite.jsx"
import WingfoilIntro from "../sections/ClassesPage/WingfoilIntro.jsx"
import WingfoilWithUs from "../sections/ClassesPage/WingfoilWithUs.jsx"
import WingfoilClasses from "../sections/ClassesPage/WingfoilClasses.jsx"
import WingfoilBenefits from "../sections/ClassesPage/WingfoilBenefits.jsx"
import EquipmentWing from "../sections/ClassesPage/equipment/EquipmentWing.jsx"
import WaveRiding from "../sections/ClassesPage/WaveRiding.jsx"
import TripsDownwinds from "../sections/ClassesPage/TripsDownwinds.jsx"
import RentGear from "../sections/ClassesPage/RentGear.jsx"
import SurfSup from "../sections/ClassesPage/SurfSup.jsx"

function ClassesPage() {
  return (
    <>
      <SEO
        titleKey="seo.classesTitle"
        descKey="seo.classesDesc"
        titleFallback="Kitesurfing & Wingfoiling Lessons in Máncora | Máncora Kite Club"
        descFallback="Professional kitesurfing and wingfoil classes in Máncora, Peru. All levels, private or group. IKO certified instructors, gear included. Book your lesson now."
        canonicalPath="/classes"
        hreflang={{ en: "/classes", es: "/esp/clases", default: "/" }}
      />

      {/* 1. Kitesurf Lessons (Servicio Principal) */}
      <ClassesHero />
      <ClassesIntro />
      <ClassesPricing />
      <ClassesBenefits />
      <ClassesSteps />
      <EquipmentKite />

      {/* Collage premium (Break visual antes de cambiar de deporte) */}
      <ClassesGallery />

      {/* 2. Wingfoil Lessons */}
      <WingfoilIntro />
      <WingfoilWithUs />
      <WingfoilClasses />
      <WingfoilBenefits />
      <EquipmentWing />

      {/* 3. Wave Riding Coaching */}
      <WaveRiding />

      {/* 4. Trips & Downwinds */}
      <TripsDownwinds />

      {/* 5. Rent Gear */}
      <RentGear />

      {/* 6. Surf & SUP */}
      <SurfSup />

    </>
  )
}

export default ClassesPage
