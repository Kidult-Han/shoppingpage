import React from 'react'
import { HABA } from '../products/Productlist'
import Product from '../Product'

function Haba() {
  return (
    <div>
      <div>
        {HABA.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Haba
