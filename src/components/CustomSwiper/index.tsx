import React, { useState } from 'react'
// import { Swiper } from '@nutui/nutui-react-taro'
import { Swiper, SwiperItem, View, Image } from '@tarojs/components'
import clsx from 'classnames'
import './index.styl'

const banners = [
  {
    src: 'https://cdnimg.gamekee.com/wiki2.0/images/w_1340/h_500/50074/479972/2024/5/7/944723.jpg?x-image-process=image/resize,m_lfit,w_800',
    text: '轮播图标题 1'
  },
  {
    src: 'https://cdnimg.gamekee.com/wiki2.0/images/w_1340/h_500/50074/4408/2024/4/24/626169.jpg?x-image-process=image/resize,m_lfit,w_800',
    text: '轮播图标题 2'
  },
  {
    src: 'https://cdnimg.gamekee.com/wiki2.0/images/w_1920/h_716/50074/4408/2024/4/24/368662.jpg?x-image-process=image/resize,m_lfit,w_800',
    text: '轮播图标题 3'
  },
  {
    src: 'https://cdnimg.gamekee.com/wiki2.0/images/w_1340/h_500/50074/391271/2024/5/4/95792.jpg?x-image-process=image/resize,m_lfit,w_800',
    text: '轮播图标题 4'
  }
];

const Demo1 = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleSwiperChange = e => {
    setCurrentIdx(e.detail.current);
  };

  return (
    <Swiper
      className='swiper'
      autoplay
      circular
      previousMargin='60rpx'
      nextMargin='60rpx'
      onChange={handleSwiperChange}
    >
      {banners.map((banner, index) => {
        return (
          <SwiperItem key={banner.src}>
            <View className={clsx('swiper__wrap', { active: currentIdx === index })}>
              <Image
                className='swiper__img'
                src={banner.src}
                onTap={() => {
                  console.log(`点击了第${index}张轮播图`);
                }}
              />
              <View className='swiper__text'>{banner.text}</View>
            </View>
          </SwiperItem>
        );
      })}
    </Swiper>
  );
};

export default Demo1