import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import w1 from '../assets/w1.jpg'
import w2 from '../assets/w2.jpg'
import w3 from '../assets/w3.jpg'
import w4 from '../assets/w4.jpg'
import w5 from '../assets/w5.jpg'
import w6 from '../assets/w6.jpg'
import w7 from '../assets/w7.jpg'
import w8 from '../assets/w8.jpg'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'

function Home() {

    const placeHolderProduct = [
        {
            _id: 1,
            name: "Shirt Jeans",
            price: 150,
            images: [{img: w1, altText: "Shirt Jeans"}]
        },
        {
            _id: 2,
            name: "Jumpsuit",
            price: 120,
            images: [{img: w2, altText: "Jumpsuit"}]
        },
        {
            _id: 3,
            name: "Bodycon Dress",
            price: 110,
            images: [{img: w3, altText: "Bodycon Dress"}]
        },
        {
            _id: 4,
            name: " Oversized Shirt",
            price: 100,
            images: [{img: w4, altText: "Oversized Shirt"}]
        },
        {
            _id: 5,
            name: "Maxi Dress ",
            price: 170,
            images: [{img: w5, altText: "Shirt Jeans"}]
        },
        {
            _id: 6,
            name: "Jacket",
            price: 140,
            images: [{img: w6, altText: "Jacket"}]
        },
        {
            _id: 7,
            name: "Shirt Jeans",
            price: 150,
            images: [{img: w7, altText: "Shirt Jeans"}]
        },
        {
            _id: 8,
            name: "Co-Ord Set ",
            price: 200,
            images: [{img: w8, altText: "Co-Ord Set "}]
        },
    ]
  return (
    <>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>

        {/* Best Seller Section */}
        <h2 className='text-xl md:text-3xl font-bold text-center mb-4 md:mb-8'>Best Seller</h2>
        <ProductDetails/>
        
        {/* Women Top Wear */}
        <div className='max-w-6xl mx-auto bg-white mt-10 md:p-8 '>
            <h2 className='text-xl md:text-3xl font-bold text-center mb-4 md:mb-8'>
                 Women Top Wear
            </h2>
            <ProductGrid products={placeHolderProduct}/>
        </div>

        {/* Featured Product */}
        <FeaturedCollection/>

        {/* Features Section */}
        <FeaturesSection/>
    </>
  )
}

export default Home
