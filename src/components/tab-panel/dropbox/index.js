import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelDropBox = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Dropbox tab')}</h2>
  )
}

export default PanelDropBox
