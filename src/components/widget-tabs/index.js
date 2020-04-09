import Tabs from '../tabs'
import TabList from '../tab-list'
import TabButton from '../tab-button'
import TabPanel from '../tab-panel'

const WidgetTabs = ({tabs, activeTab, onClick}) => (
  <Tabs>
    <TabList>
      {tabs.map((tab) => (
        <TabButton tab={tab} onClick={onClick(tab)} isActive={tab === activeTab}>
          {tab}
        </TabButton>
      ))}
    </TabList>
    <TabPanel activeTab={activeTab} />
  </Tabs>
)

export default WidgetTabs
