import React from 'react'

const Product = ({product}) => {

  return (
    <div>
      
        <h3>{product.name}</h3>
    
        <div>${product.price}</div>
        <div>
            <button>Addd To Cart</button>
        </div>

      
    </div>
  )
}

export default Product
