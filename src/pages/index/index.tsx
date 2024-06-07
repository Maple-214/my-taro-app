// import { View, Text } from '@tarojs/components'
// import { useLoad } from '@tarojs/taro'
import { useRef } from 'react'
import { Input, Button } from '@tarojs/components'
import './index.styl'

export default function Index() {

  const inputRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    inputRef.current?.focus()
  }

  return (
    <>
      <Input style={{ background: 'red 1px sold' }} ref={inputRef} />
      <Button onClick={handleClick}>Focus the input</Button>
    </>
  )
}
