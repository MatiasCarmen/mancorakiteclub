import SEO from '../../components/SEO.jsx'
import CTA from '../../sections/home/CTA.jsx'
import Gallery from '../../sections/home/Gallery.jsx'
import HeroVideo from '../../sections/home/HeroVideo.jsx'
import Highlights from '../../sections/home/Highlights.jsx'
import Testimonials from '../../sections/home/Testimonials.jsx'

function HomeEsPage() {
  return (
    <>
      <SEO
        title="Mancora Kite Club | Inicio"
        description="Máncora Kite Club – best kitesurfing and wingfoil spot in Peru. Lessons, beachfront stays, epic trips. IKO certified. Book your adventure online now!!!"
        canonicalPath="/esp"
        hreflang={{ en: '/', es: '/esp', default: '/' }}
      />
      <HeroVideo />
      <Highlights />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  )
}

export default HomeEsPage
