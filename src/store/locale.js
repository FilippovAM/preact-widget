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

const loadLocale = async (lang) => {
  const locale = await import(`../locale/${lang}`)
  return locale.default
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
    let locale = await loadLocale(state.lang)
    const hasCustomLocale = !!initialState.locales

    if (hasCustomLocale) {
      locale = {
        ...locale,
        ...initialState.locales[state.lang]
      }
    }

    dispatch({type: ACTIONS_LOCALE.SET_LOCALE, locale})

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
