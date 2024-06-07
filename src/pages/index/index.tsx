import { useState } from 'react'
import { Block, View, Image, Text } from '@tarojs/components'
import { Tabs } from '@nutui/nutui-react-taro'
import Demo1 from '@/components/CustomSwiper'
import { InavItems } from './types'
import './index.styl'

export default function Index() {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [navItems, setNavItems] = useState<InavItems[]>([{ id: 1, title: '攻略' }, { id: 2, title: '公告' }
  ])
  return (
    <View className='index'>
      <Tabs
        value={tab1value}
        onChange={(value) => {
          setTab1value(value)
        }}
        activeType='smile'
        align='right'

        duration='500'
        tabStyle={{ background: '#fff', borderBottom: '1px solid hsla(0,0%,91.8%,.8)' }}
      >
        {
          navItems.map(item => (
            <Tabs.TabPane className='tese' title={item.title} key={item.id}>
              <Demo1 />
              <View>
                <View>111</View>
                <View>3333</View>
              </View>
            </Tabs.TabPane>
          ))
        }
      </Tabs>
    </View>
  )
}
