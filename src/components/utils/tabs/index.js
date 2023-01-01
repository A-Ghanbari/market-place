import { Tabs as AntTabs } from 'antd'
import "components/utils/tabs/tabs.scss"

const { TabPane } = AntTabs;

function Tabs({ tabs, position }) {
  return (
    <AntTabs defaultActiveKey="0" tabPosition={position}>
      {tabs.map((tab, index) => (
        <TabPane tab={tab.title} key={index}>
          {tab.render}
        </TabPane>
      ))}
    </AntTabs>
  )
}

export default Tabs