import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelCamera = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Camera tab')}</h2>
  )
}

export default PanelCamera
