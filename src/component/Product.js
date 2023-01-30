import React, { useContext } from 'react'
import { proContext } from './Context'
import './ShopItem.css'

export default function Product(props) {
  const { id, name, size, price, proImage } = props.data
  const { cartItem, AddProduct } = useContext(proContext)
  return (
    <div className='product-card'>
      <img className='product-card img' src={proImage} alt='products' />
      <div className='productText'>
        <p>产品：{name}</p>
        <p>
          规格：{size} {''}
        </p>
        <p>价格：¥{price}元</p>
        <button className='addToCart' onClick={() => AddProduct(id)}>
          加入购物车({cartItem[id]})
        </button>
      </div>
    </div>
  )
}
