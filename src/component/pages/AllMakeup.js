import React from 'react'
import { MakeupProducts } from '../products/Productlist'
import Product from '../Product'

function AllMakeups() {
  return (
    <div>
      <div>
        {MakeupProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
export default AllMakeups
