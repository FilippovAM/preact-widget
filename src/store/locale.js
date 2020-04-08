import { createContext, useEffect, useReducer, useState } from 'preact/compat'

export const AVAILABLE_LOCALES = ['ru', 'en']

export const ACTIONS_LOCALE = {
  SET_LOCALE: 'set-locale',
  SET_LANG: 'set-lang',
}

export const LocaleStore = createContext()

const reducer = (state, {type, locale, lang}) => {
  switch (type) {
    case ACTIONS_LOCALE.SET_LOCALE:
      return {...state, locale, translate: getTranslate(locale)}
    case ACTIONS_LOCALE.SET_LANG:
      return {...state, lang}
    default:
      return state
  }
}

const getTranslate = (locale) => key => {
  return locale[key] || key
}

const loadLocale = (lang) => {
  return import(`../locale/${lang}`)
}

const defaultInitialState = {
  lang: 'en',
}

const LocaleStoreProvider = ({
                               children,
                               initialState = defaultInitialState
                             }) => {
  const [isInit, setIsInit] = useState(true)

  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}

  useEffect(async () => {
    const locale = await loadLocale(state.lang)
    dispatch({type: ACTIONS_LOCALE.SET_LOCALE, locale: locale.default})

    if (isInit) {
      setIsInit(false)
    }
  }, [state.lang])

  if (isInit) return null

  return (
    <LocaleStore.Provider value={value}>{children}</LocaleStore.Provider>
  )
}

export default LocaleStoreProvider
