import React from 'react'
import { MedicineProducts } from '../products/Productlist'
import Product from '../Product'

function Medicine() {
  return (
    <div>
      <div>
        {MedicineProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Medicine
