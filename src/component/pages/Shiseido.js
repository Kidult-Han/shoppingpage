import React from 'react'
import { SHISEIDO } from '../products/Productlist'
import Product from '../Product'

function Shiseido() {
  return (
    <div>
      <div>
        {SHISEIDO.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Shiseido
