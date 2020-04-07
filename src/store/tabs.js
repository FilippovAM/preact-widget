import { createContext, useReducer } from 'preact/compat'

export const TabsEnum = {
  FILE: 'file',
  CAMERA: 'camera',
  URL: 'url',
  FACEBOOK: 'facebook',
  GOOGLE_DRIVE: 'google-drive',
  GOOGLE_PHOTOS: 'google-photos',
  DROPBOX: 'dropbox',
  INSTAGRAM: 'instagram',
  EVERNOTE: 'evernote',
  FLICKR: 'flickr',
  ONEDRIVE: 'onedrive',
  BOX: 'box',
  VK: 'vk',
  HUDDLE: 'huddle',
}

export const ACTIONS_TABS = {
  SET_TABS: 'set-tabs',
  SET_ACTIVE_TAB: 'set-active-tab',
  RESET_ACTIVE_TAB: 'reset-active-tab',
}

export const TabsStore = createContext()

const reducer = (state, {type, tabs, activeTab}) => {
  switch (type) {
    case ACTIONS_TABS.SET_TABS:
      return {...state, tabs}
    case ACTIONS_TABS.SET_ACTIVE_TAB:
      return {...state, activeTab}
    case ACTIONS_TABS.RESET_ACTIVE_TAB:
      return {...state, activeTab: null}
    default:
      return state
  }
}

const TabsStoreProvider = ({
                               children,
                               initialState = {
                                 tabs: Object.values(TabsEnum),
                                 activeTab: TabsEnum.FILE
                               }
                             }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}

  return (
    <TabsStore.Provider value={value}>{children}</TabsStore.Provider>
  )
}

export default TabsStoreProvider
