import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelHuddle = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Huddle tab')}</h2>
  )
}

export default PanelHuddle
