import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelBox = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Box tab')}</h2>
  )
}

export default PanelBox
