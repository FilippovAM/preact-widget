import './style'
import WidgetApp from './components/app'
import TabsStoreProvider, { TabsEnum } from './store/tabs'

const App = () => {
  const dummyInitialAppState = {
    tabs: [TabsEnum.CAMERA, TabsEnum.FILE, TabsEnum.DROPBOX, TabsEnum.FACEBOOK],
    activeTab: TabsEnum.FACEBOOK
  }

  return (
    <TabsStoreProvider initialState={dummyInitialAppState}>
      <WidgetApp />
    </TabsStoreProvider>
  )
}

export default App
