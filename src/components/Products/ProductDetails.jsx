import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import ThumbImg1 from '../../assets/pd1.jpg';
import ThumbImg2 from '../../assets/pd2.jpg';
import ProductGrid from './ProductGrid';
import like1 from '../../assets/like1.jpg'
import like2 from '../../assets/like2.jpg'
import like3 from '../../assets/like3.jpg'
import like4 from '../../assets/like4.jpg'



const selectedProduct = {
    name: "Men's Suit",
    price: 120,
    orginalPrice: 150,
    description: "This is a New style suit perfect for any occasion",
    band: "Nike",
    material: "Cotton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#96c1ff", "White"],
    images: [{img: ThumbImg1, altText: "Men's Suit"}, {img: ThumbImg2, altText: "Men's Suit"}]
}

const similarProduct = [
    {
        _id: 1,
        name: "Men's three piece",
        price: 200,
        images: [{img: like1, altText: "Men's three piece"}]
    },
    {
        _id: 2,
        name: "Men's Two piece",
        price: 170,
        images: [{img: like2, altText: "Men's Two piece"}]
    },
    {
        _id: 3,
        name: "Men's three piece",
        price: 210,
        images: [{img: like3, altText: "Men's three piece"}]
    },
    {
        _id: 4,
        name: "Men's pent shirt",
        price: 100,
        images: [{img: like4, altText: "Men's pent shirt"}]
    }
]



function ProductDetails() {
    const [mainimg, setMainImg] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    
    useEffect(() => {
        if(selectedProduct?.images.length > 0){
            setMainImg(selectedProduct.images[0].img);
        }
        
    }, []);
    
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };
    
    const decreaseQuantity = () => {
        if(quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };
    
    const handleAddToCart = async () => {
        if (!selectedSize || !selectedColor) {
            toast.warning('Please select a size and color before adding to cart', {
                position: 'top-right',
                duration: 3000,
            });
            return;
        }
        
        setIsAddingToCart(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // In a real app, you would add to cart here
            // const cartItem = {
            //     product: selectedProduct,
            //     quantity,
            //     selectedColor,
            //     selectedSize,
            //     mainImage: mainimg
            // };
            // addToCart(cartItem);
            
            toast.success(
                <div className="flex flex-col gap-1">
                    <div className="font-bold">Added to cart successfully!</div>
                </div>,
                {
                    duration: 5000,
                    position: 'top-right',
                    style: {
                        background: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                    },
                }
            );
        } catch (error) {
            toast.error('Failed to add item to cart. Please try again.', {
                position: 'top-right',
                duration: 3000,
            });
        } finally {
            setIsAddingToCart(false);
        }
    };

    return (
        <div className='p-0 md:p-8'>

            <div className='max-w-4xl mx-auto bg-white p8 rounded-lg'>
                {/* Best Seller */}

                <div className='flex flex-col md:flex-row justify-center md:items-start px-8'>
                    {/* Left Thumbnail (Desktop) */}
                    <div className='hidden md:flex flex-col space-y-4 mr-4'>
                        {selectedProduct.images.map((proimg, index) => (
                            <img 
                                key={index} 
                                className={`w-[60px] h-[80px] cursor-pointer rounded-lg object-fill border ${mainimg === proimg.img ? "border-black" : "border-gray-300"}`}
                                src={proimg.img} 
                                alt={proimg.altText}
                                onClick={() => setMainImg(proimg.img)} 
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img 
                                src={mainimg} 
                                alt="Main Product"
                                className='w-full h-[400px] md:h-[500px] object-fill rounded-lg' 
                            />
                        </div>
                    </div>

                    {/* Mobile Thumbnail */}
                    <div className='md:hidden flex flex-row overscroll-x-scroll space-x-2 mb-4'>
                        {selectedProduct.images.map((proimg, index) => (
                            <img 
                                key={index} 
                                className={`w-[60px] h-[80px] cursor-pointer rounded-lg object-fill border ${mainimg === proimg.img ? "border-black" : "border-gray-300"}`}
                                src={proimg.img} 
                                alt={proimg.altText}
                                onClick={() => setMainImg(proimg.img)}  
                            />
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h2 className='text-xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h2>
                        <p className='text-sm md:text-xl text-gray-600 line-through mb-1'>
                            {selectedProduct.orginalPrice && `$${selectedProduct.orginalPrice}`}
                        </p>
                        <p className='text-sm md:text-xl text-gray-500 mb-2'>
                            ${selectedProduct.price}
                        </p>
                        <p className='text-gray-600 text-sm md:text-xl mb-4'>{selectedProduct.description}</p>
                        
                        {/* Color Selection */}
                        <div className='mb-4'>
                            <p className='text-gray-600 text-sm md:text-xl mb-4'>Colors: </p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color) => (
                                    <button 
                                        key={color} 
                                        className={`cursor-pointer w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                                        style={{background: color.toLowerCase()}}
                                        onClick={() => setSelectedColor(color)}
                                        title={color}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        
                        {/* Size Selection */}
                        <div className='mb-4'>
                            <p className='text-gray-600 text-sm md:text-xl mb-2'>Sizes: </p>
                            <div className='flex gap-2'>
                                {selectedProduct.sizes.map((size) => (
                                    <button 
                                        key={size} 
                                        className={`cursor-pointer text-sm border p-1 md:py-1 md:px-2 rounded-sm ${selectedSize === size ? 'bg-black text-white' : 'bg-white'}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>     
                        </div>

                        {/* Quantity Selector */}
                        <div className='mb-6'>
                            <p className='text-gray-600 text-sm md:text-xl mb-2'>Quantity: </p>
                            <div className='flex items-center space-x-4'>
                                <button 
                                    className='cursor-pointer text-sm bg-gray-200 border p-1 md:py-1 md:px-2 rounded-sm'
                                    onClick={decreaseQuantity}
                                >
                                    -
                                </button>
                                <span className='text-lg'>{quantity}</span>
                                <button 
                                    className='cursor-pointer text-sm bg-gray-200 border p-1 md:py-1 md:px-2 rounded-sm'
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>
                            </div>   
                        </div>

                        {/* Add to Cart Button */}
                        <button 
                            className='bg-black cursor-pointer text-sm md:text-lg text-white py-2 px-6 w-full flex items-center justify-center'
                            onClick={handleAddToCart}
                            disabled={isAddingToCart}
                        >
                            {isAddingToCart ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Adding...
                                </>
                            ) : (
                                'ADD TO CART'
                            )}
                        </button>

                        {/* Product Details */}
                        <div className='mt-4 text-gray-700'>
                            <h3 className='font-bold text-sm md:text-lg mb-2'>Characteristics: </h3>
                            <table className='text-left w-full border-collapse border border-slate-400 text-xs md:text-sm text-gray-600'>
                                <tbody>
                                    <tr>
                                        <td className='border-collapse border border-slate-400 p-0.5'>Brand</td>
                                        <td className='border-collapse border border-slate-400 p-0.5'>{selectedProduct.band}</td>
                                    </tr>
                                    <tr>
                                        <td className='border-collapse border border-slate-400 p-0.5'>Material</td>
                                        <td className='border-collapse border border-slate-400 p-0.5'>{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                
                {/* You May Like */}
                <div className='mt-10 md:mt-20'>
                    <h2 className='text-xl md:text-3xl font-bold text-center mb-4 md:mb-8'>
                        You May Also Like
                    </h2>
                    <ProductGrid products={similarProduct}/>
                </div>
            </div>

            

            
        </div>
    )
}

export default ProductDetails