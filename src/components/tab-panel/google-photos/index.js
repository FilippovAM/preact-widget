import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelGooglePhotos = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Google-photos tab')}</h2>
  )
}

export default PanelGooglePhotos
