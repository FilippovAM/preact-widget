import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelInstagram = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Instagram tab')}</h2>
  )
}

export default PanelInstagram
