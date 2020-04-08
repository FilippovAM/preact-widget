import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelFlickr = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Flickr tab')}</h2>
  )
}

export default PanelFlickr
