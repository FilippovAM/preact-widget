import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelGoogleDrive = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Google-drive tab')}</h2>
  )
}

export default PanelGoogleDrive
