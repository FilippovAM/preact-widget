import style from './style.css'
import * as TabIcons from '../tab-icons'
import { TabsEnum } from '../../constants/tabs'

const getTabIconById = id => {
  switch (id) {
    case TabsEnum.FILE:
      return TabIcons.File
    case TabsEnum.CAMERA:
      return TabIcons.Camera
    case TabsEnum.URL:
      return TabIcons.Url
    case TabsEnum.FACEBOOK:
      return TabIcons.Facebook
    case TabsEnum.GOOGLE_DRIVE:
      return TabIcons.GoogleDrive
    case TabsEnum.GOOGLE_PHOTOS:
      return TabIcons.GooglePhotos
    case TabsEnum.DROPBOX:
      return TabIcons.Dropbox
    case TabsEnum.INSTAGRAM:
      return TabIcons.Instagram
    case TabsEnum.EVERNOTE:
      return TabIcons.Evernote
    case TabsEnum.FLICKR:
      return TabIcons.Flickr
    case TabsEnum.ONEDRIVE:
      return TabIcons.Onedrive
    case TabsEnum.BOX:
      return TabIcons.Box
    case TabsEnum.VK:
      return TabIcons.Vk
    case TabsEnum.HUDDLE:
      return TabIcons.Huddle
    default:
      return null
  }
}

const TabButton = ({isActive, tab, ...props}) => {
  const Icon = getTabIconById(tab)

  return (
    <button class={`${style.tabButton} ${isActive ? style.isActive : ''}`}{...props}>
      <Icon />
    </button>
  )
}

export default TabButton
