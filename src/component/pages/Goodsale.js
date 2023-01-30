import React from 'react'
import { Goodsale } from '../products/Productlist'
import Product from '../Product'

function GoodSale() {
  return (
    <div>
      <div>
        {Goodsale.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default GoodSale
