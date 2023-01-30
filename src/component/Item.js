import React, { useContext } from 'react'
import { proContext } from './Context'
import './cart/Cart.css'

export default function Item(props) {
  const { id, name, price, proImage } = props.data
  const { cartItem, AddProduct, RemoveProduct, InputProduct } =
    useContext(proContext)

  return (
    <div>
      <img className='shoppingImg' src={proImage} alt='products' />
      <div className='shoppingCart'>
        <div>
          <p> {name} </p>
          <p> 价格: 人民币：{price}</p>
          <div className='shoppingInfo'>
            <button onClick={() => RemoveProduct(id)}> - </button>
            <input
              style={{ width: 20 }}
              value={cartItem[id]}
              onChange={(e) => InputProduct(id, e.target.value)}
            />
            <button onClick={() => AddProduct(id)}> + </button>
          </div>
        </div>
      </div>
    </div>
  )
}
