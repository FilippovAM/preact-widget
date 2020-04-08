import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelOneDrive = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('OneDrive tab')}</h2>
  )
}

export default PanelOneDrive
