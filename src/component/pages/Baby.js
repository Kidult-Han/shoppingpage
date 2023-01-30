import React from 'react'
import { ProBaby } from '../products/Productlist'
import Product from '../Product'

function Baby() {
  return (
    <div>
      <div>
        {ProBaby.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Baby
