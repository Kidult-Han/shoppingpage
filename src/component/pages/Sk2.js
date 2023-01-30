import React from 'react'
import { SK2 } from '../products/Productlist'
import Product from '../Product'

function Sk2() {
  return (
    <div>
      <div>
        {SK2.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Sk2
