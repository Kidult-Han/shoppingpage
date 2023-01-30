import React, { useState, useEffect } from 'react'

const Letter = () => {
  const [textPosition, setTextPosition] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextPosition((prevPosition) => {
        if (prevPosition <= -700) {
          return 0
        } else {
          return prevPosition - 1
        }
      })
    }, 100)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      style={{
        whiteSpace: 'nowrap',
        backgroundColor: 'orange',
        fontSize: '25px',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          left: textPosition,
        }}
      >
        欢迎光临大桔日本代购商城，现优惠活动每次购物满1000元以上，
        免邮费，不足的另收邮费每千克80元
      </div>
    </div>
  )
}

export default Letter
