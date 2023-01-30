import React from 'react'
import { MakeupOthers } from '../products/Productlist'
import Product from '../Product'

function MakeOther() {
  return (
    <div>
      <div>
        {MakeupOthers.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default MakeOther
