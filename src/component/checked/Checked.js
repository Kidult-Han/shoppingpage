import React, { useState } from 'react'
import checkImg from './Wechat.jpeg'
import { useContext } from 'react'
import { proContext } from '../Context'
import './Checked.css'
export default function Checked() {
  const { TotalPrice } = useContext(proContext)
  const totalPrice = TotalPrice()
  const [postMes, setPostMes] = useState({
    postCode: '',
    postAddress: '',
    postName: '',
    postCall: '',
  })
  const handleMes = () => {
    console.log(postMes)
  }
  return (
    <div className='checked'>
      {totalPrice > 0 ? (
        <div>
          <p style={{ fontSize: '20px' }}>商品金额：¥{totalPrice}</p>
          <p>请填写您的收货信息：</p>
          <p>邮编：</p>
          <input
            type='text'
            maxLength='6'
            style={{ width: 300, height: 30 }}
            value={postMes.postCode}
            onChange={(e) =>
              setPostMes((prev) => ({ ...prev, postCode: e.target.value }))
            }
          />
          <p>地址：</p>
          <input
            style={{ width: 300, height: 30 }}
            value={postMes.postAddress}
            onChange={(e) =>
              setPostMes((prev) => ({ ...prev, postAddress: e.target.value }))
            }
          />
          <p>收货人：</p>
          <input
            style={{ width: 300, height: 30 }}
            value={postMes.postName}
            onChange={(e) =>
              setPostMes((prev) => ({ ...prev, postName: e.target.value }))
            }
          />
          <p>电话：</p>
          <input
            type='text'
            maxLength='11'
            style={{ width: 300, height: 30 }}
            value={postMes.postCall}
            onChange={(e) =>
              setPostMes((prev) => ({ ...prev, postCall: e.target.value }))
            }
          />
          <p>
            <button onClick={handleMes}>完成下单</button>
          </p>
          <p>微信收款码</p>
          <img
            src={checkImg}
            alt='checkImg'
            style={{ width: 150, height: 150 }}
          />
        </div>
      ) : (
        <p>“您的购物车是空的”</p>
      )}
    </div>
  )
}
