import React, { useContext } from 'react'
import {proContext} from "../Context"
import { Products } from '../products/Productlist'
import Item from '../Item'
import { useNavigate } from 'react-router-dom'
import './Cart.css'


export default function Cart() {
    const{cartItem,TotalPrice}=useContext(proContext)
    const total = TotalPrice();
    const nav=useNavigate()
  return (
    <div className='CartDiv'>
      <div>您的购物车</div>
      <div >
         {Products.map((item) => cartItem[item.id] !== 0 ? <Item data={item} key={item.id}/> : null)}
      </div>
      {total>0?<div>商品总价：¥{total}</div>:<p>“是空的”</p>}
      <button className='shoppingButton' onClick={()=>nav("/")}>继续购物</button>
      <button className='shoppingButton' onClick={()=>nav("/checked")}>结账</button>
    </div>
  )
}
