import { useState } from 'react'
import { View } from '@tarojs/components'
import { Tabs, ConfigProvider } from '@nutui/nutui-react-taro'
import Strategy from '@/components/Strategy'
import Information from '@/components/Information'
import Notice from '@/components/Notice'
import CustomSwiper from '@/components/CustomSwiper'

import { banners, navItems } from './mock'
import './index.styl'

export default function Index() {
  const [tab1value, setTab1value] = useState<string | number>(0)
  const onTap = (banner) => {
    console.log(banner);
  }
  return (
    <View className='index'>
      <ConfigProvider >
        <Tabs
          value={tab1value}
          onChange={(value) => {
            setTab1value(value)
          }}
          activeType='smile'
          duration='500'
          tabStyle={{ background: '#fff', borderBottom: '1px solid hsla(0,0%,91.8%,.8)', position: 'sticky', top: '0px', zIndex: 11, overflowX: 'hidden' }}
        >
          {
            navItems.map(item => (
              <Tabs.TabPane className='no-padding' title={item.title} key={item.id}>
                {tab1value === 0 && (<>
                  <CustomSwiper
                    onTap={onTap}
                    banners={banners}
                    className='strategy-swiper'
                  />
                  <Notice />
                </>)}
                <View>
                  {tab1value === 0 && <Strategy />}
                  {tab1value === 1 && <Information />}
                </View>
              </Tabs.TabPane>
            ))
          }
        </Tabs>
      </ConfigProvider>

    </View>
  )
}
