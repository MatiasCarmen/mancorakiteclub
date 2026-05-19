import { FaWhatsapp } from 'react-icons/fa'
import FullscreenHero from '../../components/ui/FullscreenHero.jsx'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'
import { HOME_HERO_SLIDES } from './homeContent.js'

function HeroVideo() {
  return (
    <FullscreenHero
      as="section"
      eyebrow="Mancora, Peru"
      title="Mancora Kite Club"
      subtitle="Aprende kitesurf y wingfoil con coaching profesional, seguridad y sesiones frente al mar."
      slides={HOME_HERO_SLIDES}
      actions={[
        {
          href: buildWhatsAppUrl(defaultInquiryMessage('Mancora Kite Club')),
          label: 'Reservar',
          icon: FaWhatsapp,
          external: true,
        },
      ]}
    />
  )
}

export default HeroVideo
