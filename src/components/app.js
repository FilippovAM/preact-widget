import { Component } from 'preact'

import Button from './button'
import WidgetModal from './widget-modal'
import Tabs from './tabs'
import TabList from './tab-list'
import TabButton from './tab-button'
import { useContext, useState } from 'preact/compat'
import { ACTIONS_TABS, TabsStore } from '../store/tabs'
import TabPanel from './tab-panel'
import { LocaleStore } from '../store/locale'
import LanguageSelect from './language-select'

export default class App extends Component {
  render() {
    const [isOpen, setIsOpen] = useState()
    const {state: {tabs, activeTab}, dispatch} = useContext(TabsStore)
    const {state: {translate: t}} = useContext(LocaleStore)

    const onClickTab = (tab) => {
      return e => {
        e.preventDefault()
        dispatch({type: ACTIONS_TABS.SET_ACTIVE_TAB, activeTab: tab})
      }
    }

    return (
      <div id="app">
        <Button onClick={() => setIsOpen(true)}>{t('Upload files')}</Button>
        <LanguageSelect />

        <WidgetModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Tabs>
            <TabList>
              {tabs.map((tab) => (
                <TabButton tab={tab} onClick={onClickTab(tab)} isActive={tab === activeTab}>
                  {tab}
                </TabButton>
              ))}
            </TabList>

            <TabPanel activeTab={activeTab} />
          </Tabs>
        </WidgetModal>
      </div>
    )
  }
}
