import React, { createContext, useState } from 'react'
import { Products } from './products/Productlist'

export const proContext = createContext(null)
const defaultCart = () => {
  let cart = {}
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const ContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(defaultCart())
  const [searchItem, setSearchItem] = useState([])

  const AddProduct = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const RemoveProduct = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1 > 0 ? prev[itemId] - 1 : 0,
    }))
  }
  const InputProduct = (itemId, inputValue) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: inputValue > 0 ? inputValue : 0,
    }))
  }
  const TotalPrice = () => {
    let total = 0
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item))
        total += cartItem[item] * itemInfo.price
      }
    }
    return total
  }
  const TotalNum = () => {
    let totalNum = 0
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalNum += cartItem[item]
      }
    }
    return totalNum
  }
  const SearchValue = (resArr) => {
    return setSearchItem(resArr)
  }

  const contextValue = {
    cartItem,
    searchItem,
    setCartItem,
    AddProduct,
    RemoveProduct,
    InputProduct,
    TotalPrice,
    TotalNum,
    SearchValue,
  }

  return (
    <proContext.Provider value={contextValue}>
      {props.children}
    </proContext.Provider>
  )
}
