import style from './style.css'
import { lazy, Suspense } from 'preact/compat'
import { TabsEnum } from '../../constants/tabs'

const imports = {
  [TabsEnum.FILE]: lazy(() => import('./file')),
  [TabsEnum.CAMERA]: lazy(() => import('./camera')),
  [TabsEnum.URL]: lazy(() => import('./url')),
  [TabsEnum.FACEBOOK]: lazy(() => import('./facebook')),
  [TabsEnum.GOOGLE_DRIVE]: lazy(() => import('./google-drive')),
  [TabsEnum.GOOGLE_PHOTOS]: lazy(() => import('./google-photos')),
  [TabsEnum.DROPBOX]: lazy(() => import('./dropbox')),
  [TabsEnum.INSTAGRAM]: lazy(() => import('./instagram')),
  [TabsEnum.EVERNOTE]: lazy(() => import('./evernote')),
  [TabsEnum.FLICKR]: lazy(() => import('./flickr')),
  [TabsEnum.ONEDRIVE]: lazy(() => import('./onedrive')),
  [TabsEnum.BOX]: lazy(() => import('./box')),
  [TabsEnum.VK]: lazy(() => import('./vk')),
  [TabsEnum.HUDDLE]: lazy(() => import('./huddle')),
}

const TabPanel = ({activeTab, ...props}) => {
  const PanelComponent = imports[activeTab]

  return (
    <div class={style.tabPanel} {...props} >
      <Suspense fallback={<div>loading...</div>}>
        <PanelComponent />
      </Suspense>
    </div>
  )
}

export default TabPanel
