import './style'
import WidgetApp from './components/app'
import LocaleStoreProvider from './store/locale'
import { TabsEnum } from './constants/tabs'

const App = () => {
  const dummyProps = {
    tabs: [TabsEnum.CAMERA, TabsEnum.FILE, TabsEnum.DROPBOX, TabsEnum.FACEBOOK],
    activeTab: TabsEnum.FACEBOOK,
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
    <LocaleStoreProvider initialState={{lang: dummyProps.lang, locales: dummyProps.locales}}>
      <WidgetApp tabs={dummyProps.tabs} activeTab={dummyProps.activeTab} />
    </LocaleStoreProvider>
  )
}

export default App
