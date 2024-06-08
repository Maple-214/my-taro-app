
import { NoticeBar, ConfigProvider } from '@nutui/nutui-react-taro'

const Notice = () => {
  const text =
    '我是一条平平无奇的小公告~~~~~~~我是一条平平无奇的小公告~~~~~~~'
  return (
    <ConfigProvider
      theme={{
        nutuiNoticebarBackground: '#EDF4FF',
        nutuiNoticebarColor: '#3768FA',
        nutuiNoticebarBoxPadding: '0 10px'
      }}
    >
      <NoticeBar content={text} />
    </ConfigProvider>
  )
}
export default Notice