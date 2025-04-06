import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

function CartContent() {

    const CartProduct = [
        {
            productId : 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            quantity : 1,
            price : 15,
            image : "https://picsum.photos/id/1/200?random=1",
        },
        {
            productId : 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity : 1,
            price : 25,
            image : "https://picsum.photos/id/1/200?random=2",
        },
    ]

  return (
    CartProduct.map((product, index)=>(
        <div key={index} className='flex items-start justify-between py-4 border-b'>
            <div className='flex items-start'>
                <img src={product.image} alt={product.name} 
                className='w-18 h-22 rounded object-cover mr-4'
                />
                <div>
                    <h3>{product.name}</h3>
                    <p className='text-sm'>Size: {product.size} | Color: {product.color}</p>
                    <div className='flex items-center mt-2'>
                        <button className='border rounded px-2 py-0.5 text-sm font-medium cursor-pointer'>-</button>
                        <span className="mx-2">{product.quantity}</span>
                        <button className='border rounded px-2 py-0.5 text-sm font-medium cursor-pointer'>+</button>
                    </div>
                </div>
            </div>
            <div>
                <p>$ {product.price.toLocaleString()}</p>
                <button className='cursor-pointer'>
                    <RiDeleteBin3Line className='w-5 h-5 text-red-500 mt-4'/>
                </button>
            </div>
        </div>
    ))
  )
}

export default CartContent
