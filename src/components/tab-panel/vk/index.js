import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelVk = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Vk tab')}</h2>
  )
}

export default PanelVk
