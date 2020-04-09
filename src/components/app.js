import { Component } from 'preact'
import Button from './button'
import WidgetModal from './widget-modal'
import { useContext, useEffect, useState } from 'preact/compat'
import { LocaleStore } from '../store/locale'
import LanguageSelect from './language-select'
import WidgetTabs from './widget-tabs'
import { TabsEnum } from '../constants/tabs'

const DEFAULT_ACTIVE_TAB = TabsEnum.FILE
const DEFAULT_TABS = Object.values(TabsEnum)

export default class App extends Component {
  render(props) {
    const [isOpen, setIsOpen] = useState()
    const {state: {translate: t}} = useContext(LocaleStore)
    const [activeTab, setActiveTab] = useState(props.activeTab || DEFAULT_ACTIVE_TAB)
    const [tabs, setTabs] = useState(props.tabs || DEFAULT_TABS)

    useEffect(() => {
      props.tabs && setTabs(props.tabs)
    }, [props.tabs])

    useEffect(() => {
      props.activeTab && setActiveTab(props.activeTab)
    }, [props.activeTab])

    const onClickTab = tab => e => {
      e.preventDefault()
      setActiveTab(tab)
    }

    return (
      <div id="app">
        <Button onClick={() => setIsOpen(true)}>{t('Upload files')}</Button>
        <LanguageSelect />

        <WidgetModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <WidgetTabs
            activeTab={activeTab}
            tabs={tabs}
            onClick={onClickTab}
          />
        </WidgetModal>
      </div>
    )
  }
}
