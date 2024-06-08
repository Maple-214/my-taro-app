import { useState } from 'react'
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'
import clsx from 'classnames'
import './index.styl'

interface IProps {
  banners: IBannersProps[]
  onTap?: (e) => void
  className?: string
}

interface IBannersProps {
  src: string,
  text: string
}
const CustomSwiper = (props: IProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleSwiperChange = e => {
    setCurrentIdx(e.detail.current);
  };

  return (
    <Swiper
      // className='swiper'
      className={clsx('swiper', props?.className)}

      autoplay
      circular
      previousMargin='60rpx'
      nextMargin='60rpx'
      onChange={handleSwiperChange}
    >
      {props.banners.map((banner, index) => {
        return (
          <SwiperItem key={banner.src}>
            <View className={clsx('swiper__wrap', { active: currentIdx === index })}>
              <Image
                className='swiper__img'
                src={banner.src}
                onTap={() => props.onTap?.(banner)}
              />
              <View className='swiper__text'>{banner.text}</View>
            </View>
          </SwiperItem>
        );
      })}
    </Swiper>
  );
};

export default CustomSwiper