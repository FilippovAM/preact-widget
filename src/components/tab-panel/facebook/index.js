import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelFacebook = () => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <h2>{t('Facebook tab')}</h2>
  )
}

export default PanelFacebook
