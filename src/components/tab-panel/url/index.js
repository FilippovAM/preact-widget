import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelUrl = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Url tab')}</h2>
  )
}

export default PanelUrl
