import { useContext } from 'preact/compat'
import style from './style.css'

import { ACTIONS_LOCALE, AVAILABLE_LOCALES, LocaleStore } from '../../store/locale'

const LanguageSelect = props => {
  const {state: {lang}, dispatch} = useContext(LocaleStore)

  const onLanguageSelect = e => {
    dispatch({type: ACTIONS_LOCALE.SET_LANG, lang: e.target.value})
  }

  const renderOption = code => (
    <option value={code} selected={code === lang}>
      {code}
    </option>
  )

  return (
    <select class={style.select} onChange={onLanguageSelect} {...props}>
      {AVAILABLE_LOCALES.map(lang => (
        renderOption(lang)
      ))}
    </select>
  )
}

export default LanguageSelect
