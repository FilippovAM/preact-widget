import './style'
import WidgetApp from './components/app'
import LocaleStoreProvider from './store/locale'
import { TabsEnum } from './constants/tabs'

const App = () => {
  const dummyInitialTabs = {
    tabs: [TabsEnum.CAMERA, TabsEnum.FILE, TabsEnum.DROPBOX, TabsEnum.FACEBOOK],
    activeTab: TabsEnum.FACEBOOK
  }
  const dummyInitialLocale = {
    lang: 'en',
    locales: {
      ru: {
        'Upload files': 'Локаль пользователя - загрузить файлы'
      },
      en: {
        'Upload files': 'User locale - upload files'
      }
    }
  }

  return (
    <LocaleStoreProvider initialState={dummyInitialLocale}>
      <WidgetApp {...dummyInitialTabs} />
    </LocaleStoreProvider>
  )
}

export default App
