import React, { useEffect, useRef, useState } from 'react';
import ar1 from '../../assets/ar1.jpg';
import ar2 from '../../assets/ar2.jpg';
import ar3 from '../../assets/ar2-1.jpg';
import ar4 from '../../assets/ar3.jpg';
import ar5 from '../../assets/ar4.jpg';
import ar6 from '../../assets/ar5.jpg';
import ar7 from '../../assets/ar6.jpg';
import ar8 from '../../assets/ar7.jpg';
import ar9 from '../../assets/ar8.jpg';
import ar10 from '../../assets/ar9.jpg';
import ar11 from '../../assets/ar10.jpg';
import ar12 from '../../assets/ar11.jpg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function NewArrivals() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [canscrollLeft, setCanScrollLeft] = useState(false);
    const [canscrollRight, setCanScrollRight] = useState(true);

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    // Update Scroll Buttons
    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            const { scrollLeft, clientWidth, scrollWidth } = container;
            
            // Check if can scroll left
            setCanScrollLeft(scrollLeft > 0);
            
            // Check if can scroll right (accounting for 1px margin to avoid false positives)
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    }

    // Mouse drag handlers for better UX
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        scrollRef.current.style.cursor = 'grabbing';
    }

    const handleMouseLeave = () => {
        setIsDragging(false);
        scrollRef.current.style.cursor = 'grab';
    }

    const handleMouseUp = () => {
        setIsDragging(false);
        scrollRef.current.style.cursor = 'grab';
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - walk;
        setStartX(x);
    }

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
            container.addEventListener('mousedown', handleMouseDown);
            container.addEventListener('mouseleave', handleMouseLeave);
            container.addEventListener('mouseup', handleMouseUp);
            container.addEventListener('mousemove', handleMouseMove);
            
            // Initial check
            updateScrollButtons();
            
            // Cleanup
            return () => {
                container.removeEventListener('scroll', updateScrollButtons);
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mouseleave', handleMouseLeave);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [isDragging, startX]);

    const newArrivals = [
        {
            _id: "1",
            name: "Women's Jeans",
            price: 120,
            images: [{ img: ar1, altText: "Women's Jeans" }]
        },
        {
            _id: "2",
            name: "Women's Black Top",
            price: 80,
            images: [{ img: ar2, altText: "Women's Black Top" }]
        },
        {
            _id: "3",
            name: "Men's Long Coat",
            price: 150,
            images: [{ img: ar3, altText: "Men's Long Coat" }]
        },
        {
            _id: "4",
            name: "Womens T-Shirt",
            price: 90,
            images: [{ img: ar4, altText: "Womens T-Shirt" }]
        },
        {
            _id: "5",
            name: "Men's Blue Jacket",
            price: 130,
            images: [{ img: ar5, altText: "Men's Blue Jacket" }]
        },
        {
            _id: "6",
            name: "Men's Shirt",
            price: 60,
            images: [{ img: ar6, altText: "Men's Shirt" }]
        },
        {
            _id: "7",
            name: "Women's Coat",
            price: 120,
            images: [{ img: ar7, altText: "Women's Coat" }]
        },
        {
            _id: "8",
            name: "Men's Jeans",
            price: 100,
            images: [{ img: ar8, altText: "Men's Jeans" }]
        },
        {
            _id: "9",
            name: "Women's Coat",
            price: 120,
            images: [{ img: ar9, altText: "Women's Coat" }]
        },
        {
            _id: "10",
            name: "Women's White Dress",
            price: 150,
            images: [{ img: ar10, altText: "Women's White Dress" }]
        },
        {
            _id: "11",
            name: "Couple Winter Dress",
            price: 600,
            images: [{ img: ar11, altText: "Couple Winter Dress" }]
        },
        {
            _id: "12",
            name: "Women's Coat",
            price: 200,
            images: [{ img: ar12, altText: "Women's Coat" }]
        },
    ];

    return (
        <section className='relative py-6 md:py-8 px-6 md:px-6 lg:px-10'>
            <div className='container mx-auto text-center relative mb-10'>
                <h2 className='text-xl md:text-3xl font-bold mb-4'>
                    Explore New Arrivals
                </h2>
                <p className='text-sm md:text-lg text-gray-600 mb-8'>
                    New Arrivals: Fresh styles just landed! Upgrade your wardrobe with the season's hottest looks.
                </p>
                
                {/* Scroll Buttons */}
                <div className='absolute right-0 md:right-2 bottom-[-45px] flex space-x-2'>
                    <button 
                        onClick={() => scroll("left")}
                        disabled={!canscrollLeft}
                        className={`p-1 md:p-2 rounded border transition-colors
                        ${canscrollLeft ? "bg-white text-black cursor-pointer hover:bg-gray-100" 
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                        aria-label="Scroll left"
                    >
                        <FiChevronLeft className="text-lg md:text-xl"/>
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        disabled={!canscrollRight}
                        className={`p-1 md:p-2 rounded border transition-colors
                        ${canscrollRight ? "bg-white text-black cursor-pointer hover:bg-gray-100" 
                                         : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                        aria-label="Scroll right"
                    >
                        <FiChevronRight className="text-lg md:text-xl"/>
                    </button>
                </div>
            </div>

            {/* Scrollable Cards */}
            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`container mx-auto overflow-x-auto flex space-x-6 relative pb-4 scrollbar-hide ${isDragging? "cursor-grabbing": "cursor-grab"}`}
                style={{ cursor: 'grab' }}
            >
                {newArrivals.map((product) => (
                    <div key={product._id} className='min-w-[75%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[23%] mt-4 relative flex-shrink-0'>
                        <img 
                            src={product.images[0]?.img} 
                            alt={product.images[0]?.altText} 
                            className='object-cover rounded-lg w-full h-[400px] md:h-[400px] lg:h-[450px]'
                            loading="lazy"
                            draggable="false"
                        />
                        <div className='absolute bottom-0 left-0 right-0 text-white   
                        p-4 rounded-b-lg backdrop-blur-sm hover:backdrop-blur-md transition-all'
                        style={{background : "rgba(0, 0, 0, 0.4)"}}>
                            <Link to={`/product/${product._id}`} className="block text-white hover:text-gray-200 transition-colors">
                                <h4 className='font-medium text-[16px] md:text-lg'>{product.name}</h4>
                                <p className='mt-1 text-[14px] md:text-[16px]'>$ {product.price.toFixed(2)}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewArrivals;