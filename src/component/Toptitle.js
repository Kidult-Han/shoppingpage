import React, { useContext } from 'react'
import { proContext } from './Context'
import { Link } from 'react-router-dom'
import {
  HomeOutlined,
  ShoppingCartOutlined,
  CreditCardOutlined,
} from '@ant-design/icons'


function Toptitle() {
  const { TotalNum, SearchValue } = useContext(proContext)
  const backToHome = () => {
    SearchValue([])
  }

  return (
    <div style={{ position: 'absolute', top: 20, right: 100 }}>
      <Link to='/'>
        <span onClick={backToHome}>
          <HomeOutlined style={{ fontSize: '50px', color: 'orange' }} />
          <span style={{ fontSize: '20px' }}>店铺首页</span>
        </span>
      </Link>
      <Link to='/cart'>
        <ShoppingCartOutlined style={{ fontSize: '50px', color: 'orange' }} />
        <span style={{ fontSize: '20px' }}>购物车({TotalNum()})</span>
      </Link>
      <Link to='/checked'>
        <CreditCardOutlined style={{ fontSize: '50px', color: 'orange' }} />
        <span style={{ fontSize: '20px' }}>结账</span>
      </Link>
    </div>
  )
}

export default Toptitle
