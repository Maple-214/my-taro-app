
import { Divider } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
import CustomCard from '@/components/CustomCard'
import './index.styl'
import { cards } from './mock'

const Strategy = () => {
  return (
    <View className='strategy'>
      <Text className='text'>角色攻略</Text>
      <Divider className='mg-10' />
      <CustomCard
        cards={cards}
      />

    </View>
  )
}
export default Strategy