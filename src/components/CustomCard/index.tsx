import { View, Text } from '@tarojs/components'
// import clsx from 'classnames'
import './index.styl'

interface Iprops {
  cards: ICards[]
  // className: string
}
interface ICards {
  id: number
  src: string
  title: string
  alt: string
}
const CustomCard = (props: Iprops) => {
  return (
    <view className='card-wrap'>
      {
        props?.cards.map(card => (
          <View className='card-items' key={card.id}>
            <img className='cover' src={card.src} alt={card.alt} />
            <Text className='text'>{card.title}</Text>
          </View>
        ))
      }

    </view>
  )
}
export default CustomCard
