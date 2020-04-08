import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelEvernote = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Evernote tab')}</h2>
  )
}

export default PanelEvernote
