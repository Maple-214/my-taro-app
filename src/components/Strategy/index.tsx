
import { Divider } from '@nutui/nutui-react-taro'
import { View, Text } from '@tarojs/components'
import CustomCard from '@/components/CustomCard'
import './index.styl'
import { cards, upCards, activeCards, fightCards, wordCards } from './mock'

const Strategy = () => {
  return (
    <View className='strategy'>
      <Text className='text'>角色攻略</Text>
      <Divider className='mg-10' />
      <CustomCard
        cards={cards}
      />
      <Text className='text'>UP角色攻略</Text>
      <Divider className='mg-10' />
      <CustomCard
        cards={upCards}
      />
      <Text className='text'>当期活动攻略</Text>
      <Divider className='mg-10' />
      <CustomCard
        cards={activeCards}
      />
      <Text className='text'>战斗攻略</Text>
      <Divider className='mg-10' />
      <CustomCard
        cards={fightCards}
      />
      <Text className='text'>大世界探索</Text>
      <Divider className='mg-10' />
      <CustomCard
        cards={wordCards}
      />
    </View>
  )
}
export default Strategy