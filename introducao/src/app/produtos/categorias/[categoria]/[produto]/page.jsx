import React from 'react'

const ProductPage = ({params}) => {
    const produto = params.produto;
  return (
    <div>
      <h1 className='text-amber-200'>Vendo produto{produto}</h1>
    </div>
  )
}

export default ProductPage;
