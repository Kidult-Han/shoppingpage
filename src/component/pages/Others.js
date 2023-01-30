import React from 'react'
import { ProOthers } from '../products/Productlist'
import Product from '../Product'

function Others() {
  return (
    <div>
      <div>
        {ProOthers.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Others
