import { useEffect, useState } from 'preact/compat'
import Tabs from '../tabs'
import TabList from '../tab-list'
import TabButton from '../tab-button'
import TabPanel from '../tab-panel'
import { TabsEnum } from '../../constants/tabs'

const DEFAULT_ACTIVE_TAB = TabsEnum.FILE
const DEFAULT_TABS = Object.values(TabsEnum)

const WidgetTabs = props => {
  const [activeTab, setActiveTab] = useState(props.activeTab || DEFAULT_ACTIVE_TAB)
  const [tabs, setTabs] = useState(props.tabs || DEFAULT_TABS)

  useEffect(() => {
    setTabs(props.tabs)
  }, [props.tabs])

  useEffect(() => {
    setActiveTab(props.activeTab)
  }, [props.activeTab])

  const onClickTab = (tab) => {
    return e => {
      e.preventDefault()
      setActiveTab(tab)
    }
  }

  return (
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
  )
}

export default WidgetTabs
