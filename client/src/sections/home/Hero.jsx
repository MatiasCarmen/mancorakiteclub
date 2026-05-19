import { FaWhatsapp } from 'react-icons/fa'
import FullscreenHero from '../../components/ui/FullscreenHero.jsx'
import { buildWhatsAppUrl, defaultInquiryMessage } from '../../lib/whatsapp.js'
import { useI18n } from '../../app/providers/i18nContext.js'
import { HOME_HERO_SLIDES } from './homeContent.js'
import heroMobileVideo from '../../assets/VIDEOS/TikVid.io_7514443269825137976-hd.mp4'

function Hero() {
  const { t } = useI18n()

  return (
    <FullscreenHero
      eyebrow="Mancora, Peru"
      title={t('hero.title')}
      subtitle={t('hero.subtitle')}
      videoSources={{
        mobileSrc: heroMobileVideo,
      }}
      slides={HOME_HERO_SLIDES}
      actions={[
        {
          href: buildWhatsAppUrl(defaultInquiryMessage('Mancora Kite Club')),
          label: t('hero.cta'),
          icon: FaWhatsapp,
          external: true,
        },
      ]}
    />
  )
}

export default Hero
