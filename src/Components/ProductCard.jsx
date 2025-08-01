import React from 'react'

const ProductCard = ({product}) => {
  return (
 <div className="ml-4  flex  ">
      <div className="border p-2 my-2  ">
        <h3>{product.productname}</h3>
        <p>{product.description}</p>
        <p>₹{product.price}</p>
        <img
          src={product.imageurl}
          alt="Product"
          className="w-32 h-32 object-cover"
        />
      </div>
    </div>  )
}

export default ProductCard