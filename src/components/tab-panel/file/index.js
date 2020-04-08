import Button from '../../button'
import style from './style.css'
import { useContext } from 'preact/compat'
import { LocaleStore } from '../../../store/locale'

const PanelFile = ({onClick}) => {
  const {state: {translate: t}} = useContext(LocaleStore)

  return (
    <div class={style.panel}>
      <h2 class={style.title}>{t('drag & drop any files')}</h2>
      <p>{t('or')}</p>
      <Button onClick={onClick}>{t('Chose a local file')}</Button>
    </div>
  )
}

export default PanelFile
