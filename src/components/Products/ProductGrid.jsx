import React from 'react'
import { Link } from 'react-router-dom'

function ProductGrid({products}) {
  return (
    <div className='grid grid-col-1 grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
        {products.map((product, index)=>(
            <Link key={index} to={`/product/${product._id}`} className='block'>
                <div className='bg-white py-3 md:p-4 rounded-lg'>
                    <div className='w-3/4 mx-auto md:w-full h-50 md:h-80 mb-4'>
                        <img src={product.images[0].img} alt={product.images[0].altText}
                        className='w-full h-full object-fill rounded-lg mb-2' />
                        
                    </div>
                    <div className='w-3/4 mx-auto md:w-full'>
                        <h3 className='text-[15px] md:text-[17px] mb-1'>{product.name}</h3>
                        <p className='text-gray-500 font-medium tracking-tighter'>$ {product.price}</p>
                    </div>
                    
                </div>
            </Link>
        ))}
        
    </div>
  )
}

export default ProductGrid
